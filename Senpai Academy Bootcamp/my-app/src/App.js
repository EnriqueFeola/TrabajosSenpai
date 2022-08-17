import logo from './logo.svg';
import './style.css';

function App() {
  return (
    <div className="App">
      <main>
    <h1>Lista de tareas!</h1>

    <form action="javascript:void(0);">
      <input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea"></input>
      <select name="prioridad" id="prioridad">
        <option value="" disabled selected>Prioridad</option>
        <option value="prioridad-baja">baja</option>
        <option value="prioridad-media">media</option>
        <option value="prioridad-alta">alta</option>
      </select>
      <button id="agregar">Agregar!</button>
    </form>
    <h3>Tareas</h3>
    <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
    <ul id="lista-tareas">
    </ul>

    <p class="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
  </main>

  <script src="main.js"></script>


    </div>
  );
}

export default App;
