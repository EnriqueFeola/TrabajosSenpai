import React from "react";



const Titulo1 = () => {
  const [inputValue, setInputValue] = React.useState("")
  // use state SELECT
  // use state TAREAS = React.useState([])
      function actualizarInput(e) {
    console.log(e);
    setInputValue(e.target.input);
    console.log(actualizarInput)
  }

  function agregarTarea(e) {
   e.preventDefault()
    //agregar la tarea. [{tarea:inputValue, prioridad:¨selectValue}, {},{}]   setTareas[...tareas, {}]  
  }

 
  return(
  <> 

    <form action="javascript:void(0);">
      <input onChange={actualizarInput} id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea"></input>
      <select name="prioridad" id="prioridad">
        <option value="" disabled selected>Prioridad</option>
        <option value="prioridad-baja">baja</option>
        <option value="prioridad-media">media</option>
        <option value="prioridad-alta">alta</option>
      </select>
      <button onClick={agregarTarea} id="agregar">Agregar!</button>
    </form>
    </>
  )
}

export default Titulo1