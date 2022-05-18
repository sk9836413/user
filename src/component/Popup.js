import {useState,useEffect} from 'react';
import'./Popup.css'

function Popup(handleClose,data){
    console.log(data)
  
    
    
    
    
    
    
    
    
    return(
        <div className='popup-container'>
            <div className='wrapper'>
                <div className='header'>
                <h4>Basic Modal</h4>
        <button className="cancel-symbol" onClick={handleClose.handleClose}>x</button>
        </div>
        <div className='input'>
      <label>Name:</label> <input type="text"/>
      <label>Email:</label> <input type="text"/>
      <label>Phone:</label> <input type="text"/>
      <label>website:</label> <input type="text"/>
      </div>
      <button  onClick={handleClose.handleClose}>Cancel</button>
      <button className='button' onClick={handleClose.handleClose}>Ok </button>
    
      </div>
      </div>
       
       
    )
}
export default Popup;