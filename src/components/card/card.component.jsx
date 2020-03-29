import React from 'react';
import './style.css';

export const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster" />
        <h1 key={props.monster.id}>{props.monster.name}</h1>
        <p>{props.monster.email}</p>
    </div>
)