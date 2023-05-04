import './App.css';
import PaginatedTable from './PaginatedTable.js'

function App() {
  return (
    <PaginatedTable
      url="https://www.cjvillarreal.com/amazon-pie-scrapper/pie_price.json"
      itemsPerPage={4}

    />
    
  );
}

export default App;
