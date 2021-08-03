import React, { useState, useEffect} from 'react';
import './Navbar.styles.css'; 

function Navbar(props){

    const [inputSearch, setInputSearch] = React.useState('');
    

    return(
        <div className = "nav">
            <div className = "box-one">
            
            <button className = "bars">
            <i className="fas fa-bars"></i>
            </button>
                <form onSubmit = {e=>props.dataFromSearch(e, inputSearch)} className =  "formulario" >
                    <input type="text" className="search-box" onChange = { e => setInputSearch(e.target.value)}/>
                    <button className = "search-b"><i class="fas fa-search search"></i></button>                                        
                </form>            
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