import React from 'react';
import './Navbar.styles.css'; 

function Navbar(){
    return(
        <div className = "nav">
            <div className = "box-one">
            <button className = "bars">
            <i className="fas fa-bars"></i>
            </button>
            
            <input type="text" className = "search-box"/>
            </div>                                    
            <div className = "other-options">
                <div className = "switch">                    
                    <div className = "circle-switch">

                    </div>
                </div>
                <div className = "dark">
                    <h2>Dark mode</h2>
                </div>
                <div>
                <i className="fas fa-user user"></i>
                </div>
            </div>         
        </div>
    )
}

export default Navbar; 