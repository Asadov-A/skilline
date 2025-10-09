import { useState } from 'react'
import './Section6.css'
import resm from '../../../assets/images/sect5-img.png'

function Section6() {

  return (
    <>
       <div class="hello-kotta">
        <div className="hello-left"><img src={resm} alt="" /></div>
        <div className="hello-right"><h1>Assessments, <span className='hspan'>Quizzes</span>, Tests</h1> <p className='po'>Easily launch live assignments, quizzes, and tests.
            Student results are automatically entered in the online gradebook.</p></div>
    </div>
    </>
  )
}

export default Section6