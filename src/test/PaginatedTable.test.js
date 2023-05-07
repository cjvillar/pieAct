import { render, screen } from '@testing-library/react';
import PaginatedTable from '../PaginatedTable';
import mockData from './mockData.json';

// test('renders loading message when data is not yet loaded', () => {
//   render(<PaginatedTable itemsPerPage={10}  />);
//   const loadingMessage = screen.getByText(/loading/i);
//   expect(loadingMessage).toBeInTheDocument();
// });

// test('renders table with correct number of rows', async () => {
//   render(<PaginatedTable itemsPerPage={5} url='/'/>);
//   const tableRows = await screen.findAllByRole('row');
//   expect(tableRows).toHaveLength(6); // 1 header row + 5 data rows
// });

// test.skip('renders pagination buttons with correct number of pages', async () => {
//   render(<PaginatedTable itemsPerPage={4} />);
//   const paginationButtons = await screen.findAllByRole('button');
//   expect(paginationButtons).toHaveLength(5); // 3 pages: 1 2 3
// });

// test('changes page when pagination button is clicked', async () => {
//   render(<PaginatedTable itemsPerPage={2} />);
//   const paginationButton = await screen.findByText('2');
//   expect(paginationButton).not.toBeDisabled();
//   paginationButton.click();
//   const currentPageButton = await screen.findByText('2', { selected: true });
//   expect(currentPageButton).toBeDisabled();
// });

describe('PaginatedTable', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the component with data', async () => {
    render(<PaginatedTable itemsPerPage={2} url="https://example.com/data" />);

    const loadingMessage = screen.getByText(/loading/i);
    expect(loadingMessage).toBeInTheDocument();

    const dateElement = await screen.findByText(/日付:/i);
    expect(dateElement).toHaveTextContent('日付: 4\\5\\2023');

    // const priceElements = screen.getAllByRole('row', { name: /price product/i });
    // expect(priceElements).toHaveLength(1);
    // expect(priceElements[0]).toHaveTextContent('$5');
    // expect(priceElements[1]).toHaveTextContent('$4');

    // const productElements = screen.getAllByRole('row', { name: /product/i });
    // expect(productElements).toHaveLength(2);
    // expect(productElements[0]).toHaveTextContent('Apple Pie');
    // expect(productElements[1]).toHaveTextContent('Blueberry Pie');

    // const pageButtons = screen.getAllByRole('button', { name: /\d+/ });
    // expect(pageButtons).toHaveLength(2);
  });
});
