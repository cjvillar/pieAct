import { render, screen } from '@testing-library/react';
import PaginatedTable from '../PaginatedTable';

test('renders loading message when data is not yet loaded', () => {
  render(<PaginatedTable itemsPerPage={10} />);
  const loadingMessage = screen.getByText(/loading/i);
  expect(loadingMessage).toBeInTheDocument();
});

test('renders table with correct number of rows', async () => {
  render(<PaginatedTable itemsPerPage={5} />);
  const tableRows = await screen.findAllByRole('row');
  expect(tableRows).toHaveLength(6); // 1 header row + 5 data rows
});

test.skip('renders pagination buttons with correct number of pages', async () => {
  render(<PaginatedTable itemsPerPage={4} />);
  const paginationButtons = await screen.findAllByRole('button');
  expect(paginationButtons).toHaveLength(5); // 3 pages: 1 2 3
});

test('changes page when pagination button is clicked', async () => {
  render(<PaginatedTable itemsPerPage={2} />);
  const paginationButton = await screen.findByText('2');
  expect(paginationButton).not.toBeDisabled();
  paginationButton.click();
  const currentPageButton = await screen.findByText('2', { selected: true });
  expect(currentPageButton).toBeDisabled();
});
