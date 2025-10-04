import { useState } from 'react'
import './Section7.css'
import section7Img from '../../../assets/icons/rasm1.png'

function Section7() {

  return (
    <>
      <div className="container">
          <main className="main1">
        <div className="chap">
          <p className="chap1">
            Class Management <br />
            <span style={{color:"#2f327d"}}>Tools for Educators</span>
          </p>
          <p className="chap2">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </p>
        </div>
        <div className="ong1">
          <img src={section7Img} alt="" />
        </div>
      </main>
      </div>
    </>
  )
}

export default Section7