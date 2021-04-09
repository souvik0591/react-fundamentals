import React from 'react';
import './App.css';
import Card from './Card.js'

function CardList({profiles}) {
  return (
    
      <div className="cardlist" >
        {profiles.map(profile => <Card {...profile}/>)}        
      </div>
   
    
  );
}

export default CardList;
