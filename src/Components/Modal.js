import React, {useState, useEffect, useRef} from "react";
import ReactDom from "react-dom";
import "../styles/App.css";
 
 
const Modal = ({show, setShow, closeShow}) => {
 
    const [visible, setIsVisible] = useState(true);
 
    return (
        <div className="whole" tabIndex = {0} onClick = {closeShow}> 
 
        {
            show === true && visible === true? 
 
            <div className="model-overlay" >
                <button className="model-close" onClick={closeShow}>Close</button>
                <div className="model">
                    <p className="model-p">This is the content of the modal.</p>  
                </div>  
            </div> 
 
            :
 
            ""
        }
 
        </div>
 
    )
}
 
export default Modal;