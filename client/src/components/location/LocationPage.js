
import Card from "../card/Card.js";
import React, { useEffect, useState } from 'react';
import BtnComponent from '../btn/BtnComponent';
import Images from '../info/Info'
import './location.css'
function LocationPage(props) {
  const [placesInfo, setPlacesInfo] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState(0)
  console.log(props.placeData)

  useEffect(() => {
    setPlacesInfo(props.placeData)
  }, [props.placeData])

  const lang = ['עברית', 'English', 'русский', 'العربية'];

  return (
    <div className="location-container">

      <div className='btn-head-container'>
        <div className='btn-container'>
      {lang.map((oneLang, index) => {
        return (
          <BtnComponent id={index} title={oneLang} key={index} setSelectedLanguage={setSelectedLanguage} />
        )
      })}
      </div>
      </div>

      <Card placeInfo={props.placeData[0]} lang={selectedLanguage} />
      <Images info={props.placeData[1]} />
    </div>)
}

export default LocationPage;
