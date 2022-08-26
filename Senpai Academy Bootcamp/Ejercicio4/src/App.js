import "./App.css";
import PrimerComponente from "./componentes/PrimerComponente";
import SegundoComponente from "./componentes/SegundoComponente";
import { useState } from "react";

function App() {
  
  const [value, setValue] = useState("")

  const cargarValue = (nuevoValue) => {
    setValue(nuevoValue);
  }

  return (
<div className="App">
  <PrimerComponente cargarValue ={cargarValue} />
  <SegundoComponente value={value} />
  </div>

  );   
}

export default App;


