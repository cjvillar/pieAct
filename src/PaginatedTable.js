import React, { useState, useEffect } from 'react';
import vapor_comp from './vapor_comp.gif'; 

function PaginatedTable({ itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [jsonData, setJsonData] = useState(null);
 

useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://www.cjvillarreal.com/amazon-pie-scrapper/pie_price.json');
      const data = await response.json();
      setJsonData(data);
    }
    fetchData();
  }, []);

  if (!jsonData) {
    return <div>Loading...</div>;
  }

 
  const maxPages = Math.ceil(jsonData.Pies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = jsonData.Pies.slice(startIndex, endIndex);
  const theDate = new Date(jsonData.Date);
  const dateOut = theDate.getDate() + "\\" +  (theDate.getMonth()+1) + "\\" + theDate.getFullYear();

  return (
    <div>
        <h1>ラズベリーパイ</h1>
        <img src={vapor_comp} alt="vaporwave"></img>
        <h2>Date: {dateOut}</h2>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr>
              <td>{item.Price}</td>
              <td>{item.Product}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: maxPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
   
  );
}

export default PaginatedTable;
