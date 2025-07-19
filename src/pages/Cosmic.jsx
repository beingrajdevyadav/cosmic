import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import data from '../assets/lifepaths.json';
import "../css/cosmic.css"
import { useNavigate } from 'react-router-dom';
import DownloadPdf from '../utils/downloadPdf';
import { toast } from 'react-toastify';


const Cosmic = () => {
  const cosmicRef = useRef();
  const navigate = useNavigate();

  const cosmic = useSelector((state) => state.cosmic);
  // console.log(cosmic);

  const cosmicReport = data.find((c) => c.number === cosmic.lifePathNum);
  console.log(cosmicReport)



  // download functionality
  const handleDownload = () => {
    toast.success("Pdf Downloaded!")
    DownloadPdf(cosmic.username, cosmicRef);
  }


  // to redirect
  const handleNext = () => {
    toast.warn("Try Next Report!")
    navigate("/");
  }
  return (
    <div className='cosmic-wrapper'>
      <div className="cosmic" ref={cosmicRef}>
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

        <div className="reading">
          <p><b>Life Style :</b> {cosmicReport.life}</p>
          <p><b>Financial Habits :</b> {cosmicReport.financialHabits} </p>
          <p><b>Spiritual Traits :</b>  {cosmicReport.spiritualTraits}</p>
        </div>

        <h3>Qualities</h3>
        <hr />

        <ul>
          {
            cosmicReport.qualities?.map((q, i) =>
              <li key={i}>{q}</li>
            )
          }
        </ul>



        <h3>Strengths</h3>
        <hr />
        <ul className='avoid-break'>
          {
            cosmicReport.strengths?.map((s, i) =>
              <li key={i}>{s}</li>
            )
          }
        </ul>

        
          <h3>Weaknesses</h3>
          <hr />
          <ul className='avoid-break'>
            {
              cosmicReport.weaknesses?.map((w, i) =>
                <li key={i}>{w}</li>
              )
            }
          </ul>


          <div className="reading avoid-break">
            <p><b>Health : </b> {cosmicReport.health}</p>
            <p><b>Advice : </b> {cosmicReport.advice} </p>
          </div>

      
      </div>

      <div className="cosmic">
        <div className="btn-box">
          <button onClick={() => handleDownload()}>Download</button>
          <button onClick={() => handleNext()}>Next Report</button>
        </div>
      </div>
    </div>
  )
}

export default Cosmic