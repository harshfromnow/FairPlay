// src/App.js
import React from "react";
import "./App.css";
import CipherForm from "./components/cipherForm";

import Fivefive from './components/FiveFive/Fivefive'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fivefive />
      <CipherForm />
    </>
  )
}

export default App;
