import React, { useState } from "react";
import * as XLSX from "xlsx";

export default function Multiread() {
    const [items, setItems] = useState([]);

 const handleFiles = (files) => {
    console.log(files);
    files.map((file) =>{
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = (e) => {
        const data = reader.result;
        console.log("loaded ", data);
        setItems([...items, data]);
      };
    });
  };
  console.log(items);
  return (
    <div className="container-fluid">
      <section className="heading">
        <h4>Products Details</h4>
        <input
          type="file"
          className="input-field"
          accept=".csv, .xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={(e) => {
            const file = [...e.target.files];
            console.log("here", file);
            // const file1 = e.target.files[1];
            handleFiles(file);
          }}
          multiple
        />
      </section>
      {items.map((d) => (
        <table
          key={d.ID}
          title={
            <div>
              <tr key={d.ID} className="btn-heading">
                <td>{d.ID}</td>
                <td>{d.Mail}</td>
                <td>{d.Name}</td>
                <td>{d.PhoneNo}</td>
                <td>{d.City}</td>
                <td>{d.Date}</td>
                <td>{d.Time}</td>
              </tr>
            </div>
          }
          content={
            <div>
              <p className="header">
                <span className="header-content">Shipping Address:</span>
                292 Naqshband Colony. Near rabbania Mosque. Multan
              </p>
              <table size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Article No</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((c) => (
                    <tr key={c.ArticleNo}>
                      <td>#</td>
                      <td>{c.ArticleNo}</td>
                      <td>{c.ProductName}</td>
                      <td>{c.Quantity}</td>
                      <td>{c.Price}</td>
                      <td>{c.TotalAmount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        />
      ))}
    </div>
  );
}