import React, { Component } from 'react';
import Header from './header.jsx';
import Hotels from './hotels/hotels';
import Filtro from './filtro/filtro';




class App extends Component {


  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <div className="row container-fluid">
          
          <Filtro/>

          <Hotels />

        </div>
      </div>
    );
  }
}




export default App;
