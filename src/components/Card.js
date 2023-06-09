import React from 'react'
import '../styles.css'
import data from '../data'

export default function Card(props) {
    console.log("this is props:", props)
  return (
   
    <div className='card-container' style={{ width: "18rem" }}>
        {data.map((card, index) => (
            <div className="card" key={index}>

                <div>
                    <img className="flower-image" src={card.image} alt="..." />
                </div>

                <div className='card-text'>
                    <h4>{card.name}</h4>
                    <h4> ${card.price}</h4>

                        <div className='tags'>
                            <ul className='tags-list'>
                                {card.tags.map((tag, i)=> (
                                    <li key={i}> {tag} </li>
                                ))}
                            </ul>
                        </div>
                </div>        
            </div>
            
    
        ))}
    </div>

    
  )
  
}