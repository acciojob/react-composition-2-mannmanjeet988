import React,{useState} from "react"
import './../styles/App.css';

const Child =({showProp, onClose}) =>{
    if(!showProp){
        return null;
     }
     

return (
    <div className="model-overlay">
       <button className="model-close" onClick={onClose}>Close</button>
       <p className="model-p">This is the content of the modal.</p>
    </div>
)
}

export default Child