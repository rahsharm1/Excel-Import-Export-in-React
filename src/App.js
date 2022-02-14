import React from 'react'
import ExportExcel from './ExportExcel';
import ImportExcel from './ImportExcel';
import Multiread from './Multiread';

function App() {
  return (
    <div>   
      {/* <Multiread/> */}
     <ImportExcel />
     <ExportExcel />
    </div>
  );
}

export default App;
