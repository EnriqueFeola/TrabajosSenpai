
import "./App.css";
import { useState } from "react";

function App() {
  const colors = ["red", "yellow", "green", "blue"];

  const [colorSemaforo, setColorSemaforo] = useState("grey");

  const funcionQueCambiaColor = (itemParametro) => {
    setColorSemaforo(itemParametro);
  };

 

  return (
    <div className="App">
      {colors.map((item, index) => {
        return (
          <div key={index}>
            <div
              className="light"
              style={{
                backgroundColor: item === colorSemaforo ? item : "grey",
              }}
              onClick={() => funcionQueCambiaColor(item)}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default App;