import React, {useState, useEffect} from 'react'
import ReactHtmlTableToExcel from 'react-html-table-to-excel';


export default function ExportExcel() {

  const [result, setResult] = useState([]);

  const getData = () => 
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(res=> setResult(res))

  }
  
  useEffect(() => {
    getData();
  }, [])

  return (
      <div className="container">
      <h3 className="mt-3 text-success"><center>Export React Table Data into Excel Sheets</center></h3>
      <div className="row mt-4">
        <ReactHtmlTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button btn btn-success mb-3"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexlx"
        buttonText="Export Data to Excel Sheet"/>

        <table className="table" id="table-to-xls">
          <thead className="thead-dark">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {result.map((res)=>
            <tr>
              <td>{res.name}</td>
              <td>{res.username}</td>
              <td>{res.email}</td>
              <td>{res.website}</td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    
    </div>
  )
}
