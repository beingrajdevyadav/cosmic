import React from 'react'
import { useSelector } from 'react-redux'
import data from '../assets/lifepaths.json';
import "../css/cosmic.css"


const Cosmic = () => {
  const cosmic = useSelector((state) => state.cosmic);
  console.log(cosmic);

  const cosmicReport = data.find((c) => c.number === cosmic.lifePathNum);
  console.log(cosmicReport)


  return (
    <div className='cosmic-wrapper'>
      <div className="cosmic">
        <h2>Cosmic Report</h2>
        <hr />

<div className="cosmic-info">
  <p>Full Name : {cosmic.username}</p>
  <p>Date of Birth : {cosmic.dob}</p>
  <p>Life Path Number : {cosmic.lifePathNum}</p>
  <p>Destiny Number : {cosmic.destinyNum}</p>
  <p>Personality Number : {cosmic.personalityNum}</p>
  <p>Astro Sign : {cosmic.astroSign}</p>
</div>

      </div>
    </div>
  )
}

export default Cosmic