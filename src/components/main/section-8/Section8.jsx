import { useState } from 'react'
import './Section8.css'
import section8Img from '../../../assets/icons/rasm2.png'


function Section8() {

  return (
    <>
        <div className="container">
           <main className="main2">
        <div className="chap3">
          <img src={section8Img} alt="" />
        </div>
        <div className="ong3">
          <p className="ong4">
            One-on-One <span style={{color:'#F48C06'}}>Discussions</span>
          </p>
          <p className="ong5">
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </main>
        </div>
    </>
  )
}

export default Section8