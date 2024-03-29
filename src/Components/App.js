
// import React,{useState} from "react";
// import './../styles/App.css';
// import Parent from "./Parent";

// const App = () => {
//   return (
//     <div>
//       <Parent />
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

//export default App

import React, {useState} from "react";
import ReactDOM from "react-dom";
import './../styles/App.css';
import Modal from "./Modal.js";
 
const App = () => {
  const [show, setShow] = useState(false);
 
  return (
    <div>
          <button className="button" onClick={() => setShow(true)}>Show Modal </button>
 
          {
 
            show ? 
 
            <Modal show = {show} setShow = {() => setShow(true)} closeShow = {() => setShow(false)}/> : ""
          }
 
 
    </div>
  )
}
 
export default App