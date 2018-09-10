import React, { Component } from 'react';
import Hotels from './hotels/hotels';
import Filtro from './filtro/filtro';




class App extends Component {


  render() {
    return (
        <div>
          <nav className="navbar navbar-a">
          </nav>
          <div className="row container-fluid">
            
            <Filtro/>

            <Hotels />

          </div>
        </div>
    );
  }
}




export default App;
