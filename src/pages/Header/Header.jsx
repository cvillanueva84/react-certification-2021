import React from 'react';
import './Header.style.css'

const Header = () => {



  return (
    <div>
      <div className="header">
        <div className="contenedor-header">
          <div className="flex">


            <div className="left-header">
              <button>MyVidios</button>
            </div>


            <div className="center-header">
              <input 
                type="text"
                placeholder="Buscar" 
              />
            </div>


            <div className="right-header">
              <button>Mode</button>
              <button>Login</button>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
