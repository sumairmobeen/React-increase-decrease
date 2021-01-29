import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Temp() {
  const [value, setvalue] = useState(0);
  function Increase() {
    setvalue((Increase) => {
      return Increase + 1

    })
  }

  function Decrease() {
    setvalue((Decrease) => {
      return Decrease - 1

    })
  }
  return (
    <div>
      <button onClick={Increase}>+++++</button>
      <h1>{value}</h1>
      <button onClick={Decrease}>------</button>
    </div>
  )
}
ReactDOM.render(


  <Temp />
  ,
  document.querySelector("#root"));
