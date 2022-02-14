import React, { useState } from 'react'
import * as XLSX from 'xlsx'

export default function ImportExcel() {

    const [items, setItems] = useState([])

    const readExcel=(file)=>{
        const promise = new Promise((resolve, reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file)

            fileReader.onload=(e)=>{
                const bufferArray=e.target.result;

                const wb = XLSX.read(bufferArray,{type:'buffer'});

                const wsname = wb.SheetNames[0];

                const ws=wb.Sheets[wsname];

                const data=XLSX.utils.sheet_to_json(ws)

                resolve(data);
            };

            fileReader.onerror= (error)=>{
                reject(error);
            };
        });

        promise.then((d)=> {
            console.log(d);
            setItems(d)

        })
    };

  return (
    <div>
        <input type="file" onChange={(e)=>{

            const file = e.target.files[0];

            readExcel(file);
        
        }}/>

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
            {items.map((res) =>
            <tr key={res.Email}>
              <td>{res.Firstname}</td>
              <td>{res.Lastname}</td>
              <td>{res.Email}</td>
              <td>{res.Website}</td>
            </tr>
            )}
          </tbody>
        </table>
    </div>
  )
}
