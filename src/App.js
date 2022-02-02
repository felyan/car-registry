import React, {Fragment} from 'react';
import './App.css';

import Header from './components/Header';
import Table from './components/Table';
import {carData} from './imports.js'



const App = () => {
  return (
    <Fragment>
      <Header title="Autónyilvántartás" />
      <Table
        tableData={carData}
        headingColumns={['Azonosító', 'Gyártó', 'Típus', 'Motor hengerűrtartalom', 'Szín', 'Kivitel', 'Gyártási időpont', 'Gyártó weboldala',]}
      />
    </Fragment>
  )
};

export default App;
