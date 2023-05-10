import './App.css';
import PaginatedTable from './PaginatedTable.js'
import Header from './Header.js'
import Footer from './Footer.js'

function App() {
 

  return (
    <div>
      <Header />
      <PaginatedTable
        url="https://www.cjvillarreal.com/amazon-pie-scrapper/pie_price.json"
        itemsPerPage={4}
      /> 
      <Footer />
    </div>
  );
}

export default App;
