import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from './components/Home'
import {Restaurantes} from './components/Restaurantes'
const RoutesApp = () => {
    const restaurantes = [
        {
          id: 1,
          name: "El Tío Bistró",
          stars: 5 + "⭐",
          deliveryCost: 5 + " USD",
          img: "https://media-cdn.tripadvisor.com/media/photo-w/15/29/d9/07/con-variedad-de-opciones.jpg",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Primuseum",
          stars: 4.5 + "⭐",
          deliveryCost: 5 + " USD",
          img: "https://media-cdn.tripadvisor.com/media/photo-o/09/34/24/f8/primuseum.jpg",
          isFavorite: false,
        },
        {
          id: 3,
          name: "Restaurante Tandory",
          stars: 4.5 + "⭐",
          deliveryCost: 5 + " USD",
          img: "https://media-cdn.tripadvisor.com/media/photo-o/01/cd/83/ba/el-salon-principal.jpg",
          isFavorite: false,
        },
        {
          id: 4,
          name: "Es Mercat",
          stars: 4.5 + "⭐",
          deliveryCost: 5 + " USD",
          img: "https://media-cdn.tripadvisor.com/media/photo-w/0d/84/bb/b0/20161103-143608-largejpg.jpg",
          isFavorite: false,
        },
        {
          id: 5,
          name: "Francis Restaurant",
          stars: 3 + "⭐",
          deliveryCost: 5 + " USD",
          img: "https://media-cdn.tripadvisor.com/media/photo-o/02/e2/e0/8d/restaurant-francis.jpg",
          isFavorite: false,
        },
        {
          id: 6,
          name: "Fellini Pocitos",
          stars: 4.5 + "⭐",
          deliveryCost: 5 + " USD",
          img: "https://media-cdn.tripadvisor.com/media/photo-o/13/0d/7f/04/salmon-crocante.jpg",
          isFavorite: false,
        },
        {
          id: 7,
          name: "Garcia, Parrilla & Bar",
          stars: 5 + "⭐",
          deliveryCost: 5 + " USD",
          img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/18/16/0e/area-interna.jpg",
          isFavorite: false,
        },
        {
          id: 8,
          name: "Carbonada",
          stars: 2 + "⭐",
          deliveryCost: 5 + " USD",
          img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/2b/fd/4b/exterior.jpg",
          isFavorite: false,
        },
        {
          id: 9,
          name: "Bar Tabare",
          stars: 3.5 + "⭐",
          deliveryCost: 5 + " USD",
          img: "https://media-cdn.tripadvisor.com/media/photo-w/13/76/73/be/sobremesa-de-chocolate.jpg",
          isFavorite: false,
        },
        {
          id: 10,
          name: "RUDY Burgers",
          stars: 4 + "⭐",
          deliveryCost: 5 + " USD",
          img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/a0/a1/e2/doblecheeseburger-con.jpg",
          isFavorite: false,
        },
      ];
return (
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/restaurantes' element={<Restaurantes restaurantes={restaurantes} />} />
      
  </Routes>
    );
}

export { RoutesApp };