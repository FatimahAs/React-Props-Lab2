import React from 'react';
import ProductCard from "./components/ProductCard"
import NavBar from "./components/NavBar"

import Footer from './components/Footer';

import './App.css';
const cardsData = [
  {
    image: 'https://images.pexels.com/photos/31581062/pexels-photo-31581062/free-photo-of-pink-ceramic-plate-on-tiled-surface.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    title: ' Pink',
   Description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum' 
  },
  {
    image: 'https://images.pexels.com/photos/31701241/pexels-photo-31701241/free-photo-of-colorful-pink-and-beige-mediterranean-architecture.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    title: ' House',
    Description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum' 
  },
  {
    image: 'https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: ' Bird',
    Description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum' 
  },
  {
    image: 'https://images.pexels.com/photos/86405/penguin-funny-blue-water-86405.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: ' Hourse',
   Description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum' 
  },
  {
    image: 'https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: ' Flower',
    Description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum' 
  }
];

function App(){
  return (
    <>
      <NavBar/>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <ProductCard key={index} {...card} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
