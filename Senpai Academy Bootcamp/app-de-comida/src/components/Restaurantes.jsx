import React from "react";
import { useState } from "react";
const Restaurantes = (props) => {
  const [restaurantes, setRestaurantes] = useState(props.restaurantes);
  const [restauranteOriginal, setRestauranteOriginal] = useState(props.restaurantes);
  {
    /* Búsqueda de restaurantes  */
  }
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    console.log(search);
    setSearch(e.target.value);
  };

  {
    /* Filtrado de restaurantes */
  }

  const [filter, setFilter] = useState("all");

  const handleFilter = (e) => {
    setFilter(e.target.value);
    
    if (filter === 'name') {
      const x = restaurantes.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

  
        return 0;
      });
      setRestaurantes(x)
    }
    else if (filter === 'all') {
      setRestaurantes(restauranteOriginal)
    }
    
  };

  return (
    <>
    
      <h1 className="text-3xl text-center text-white">Restaurantes</h1>
      <div className="input-search-container w-full flex justify-center items-center mt-2">
        <select className="w-32 p-2 rounded-l-md" onChange={handleFilter}>
        {console.log(filter)}
          <option value="all">Todos</option>
          <option value="name">Nombre</option>
          <option value="qualification">Calificación</option>
        </select>

        {/* Input de búsqueda*/}
        <input
          className="input-search w-96 p-2"
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={handleChange}
        />
        {/* Botón de búsqueda*/}
        <button className="btn-search w-44 p-2 rounded-r-lg bg-yellow-500 text-white">
          Buscar
        </button>
      </div>
      <main className="mt-3 px-36 gap-y-3 w-full h-screen grid grid-cols-5 auto-rows-max items-center">
        {restaurantes.map((restaurante, i) => (
          <div key={i} className="w-full h-full">
            <div className="card-container bg-white mx-2 rounded-lg">
              <img
                src={restaurante.img}
                alt={restaurante.name}
                className="w-full h-52 rounded-t-lg"
              />
              <div className="w-full flex justify-between items-center px-2 pb-2 mt-3 mb-5">
                <h2 className="text-xl">{restaurante.name}</h2>
                <h3 className="text-xl">{restaurante.stars}</h3>
              </div>
              <div className="w-full flex justify-between items-center px-2 pb-2">
                <h3 className="text-md ">
                  Costo de envió: {restaurante.deliveryCost}
                </h3>
                <button className="bg-red-500 text-white rounded-full w-10 h-10 mx-2">
                  <i className="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export { Restaurantes };