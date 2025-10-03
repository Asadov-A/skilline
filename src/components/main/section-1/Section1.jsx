import { useState } from 'react'
import './Section1.css'
import playBtn from '../../../assets/icons/play-btn.png'

function Section1() {

  return (
    <>
    <section className="section-1">
  <div className="container">
     <div className="section-1__box">
       <h1><span>Studying</span> Online is now <br/> much easier</h1>

      <p>Skilline is an interesting platform that will teach <br /> you in more an interactive way</p>

      <div className="section-1__buttons">
        <button className="section-1__button-1">
          Join for free
        </button>

          <a target='_blank' href="https://www.youtube.com/watch?v=TmuDsq4m4Ts/" className="play-btn">
       <div className="play-btn__img">
        <img src={playBtn} alt="play-btn" />
       </div>
        <p>Watch how it works</p>
        </a>

      </div>
   </div>
  </div>
    </section>
    </>
  )
}

export default Section1