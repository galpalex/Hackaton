import React from 'react';
import "./info.css";

function Images({info}) {
  console.log(info)
  return <div className='info-container'>
      {info?<div className='imgs-container'>
        {info.images.map((src)=>{
         return  <img src={src} alt={info.name} className='img' key={src}/>
        })}
      </div>
        :<></>}
  </div>;
}

export default Images;
