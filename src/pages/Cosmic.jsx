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
          <p><b>Full Name :</b>  {cosmic.username}</p>
          <p><b>Date of Birth :</b>  {cosmic.dob}</p>
          <p><b>Life Path Number :</b>  {cosmic.lifePathNum}</p>
          <p><b>Destiny Number :</b>  {cosmic.destinyNum}</p>
          <p><b>Personality Number :</b>  {cosmic.personalityNum}</p>
          <p><b>Astro Sign :</b>  {cosmic.astroSign}</p>
        </div>

      </div>
    </div>
  )
}

export default Cosmic