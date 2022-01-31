import React from 'react';
import "./card.css"

function Card({placeInfo,lang}) {
        
    return <div className='box-container'>
           
        {placeInfo ?  
            <div className='box'>
                <h3>  {placeInfo[lang].webName}</h3>
                <p>  {placeInfo[lang].text}</p>
            </div>
            
        : <div className='box'></div>
        }

    </div>;
}

export default Card;
