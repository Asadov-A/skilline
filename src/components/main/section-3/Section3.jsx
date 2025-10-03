import { useState } from 'react'
import './Section3.css'

function Section3() {

  return (
    <>
    <section className='section-3'>
  <h2>What is <span>Skilline?</span></h2>

  <p>Skilline is a platform that allows educators to create online classes whereby they can <br /> store the course materials online; manage assignments, quizzes and exams; monitor <br /> due dates; grade results and provide students with feedback all in one place.</p>

  <div className="section-3__boxes">


    <div id='section-3__box--1' className="section-3__box">
  <h3>FOR INSTRUCTORS</h3>
  <button className='section-3__button--1'>Start a class today</button>
    </div>


     <div id='section-3__box--2' className="section-3__box">
  <h3>FOR STUDENTS</h3>
  <button className='section-3__button--2'>Enter access code</button>
    </div>



  </div>
    </section>
    </>
  )
}

export default Section3