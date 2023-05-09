import React, { useState, useEffect } from 'react';

function PaginatedTable({ itemsPerPage, url }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [jsonData, setJsonData] = useState(null);
  const [currentDataset, setCurrentDataset] = useState('AMZ');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setJsonData(data);
    }
    fetchData();
  }, [url]);

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  const maxPages = Math.ceil(jsonData[currentDataset].length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = jsonData[currentDataset].slice(startIndex, endIndex);
  const theDate = new Date(jsonData.Date);
  const dateOut =  theDate.getMonth()+1 + "\\" +  (theDate.getUTCDate()) + "\\" + theDate.getFullYear(); 

  return (
    <div>
      <h2>日付: {dateOut}</h2>
      <div>
        <button onClick={() => setCurrentDataset('AMZ')} disabled={currentDataset === 'AMZ'}>AMZ</button>
        <button onClick={() => setCurrentDataset('CANAKIT')} disabled={currentDataset === 'CANAKIT'}>CANAKIT</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.ID}>
              <td>{item.Price}</td>
              <td>{item.Product}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
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
