import { useState } from 'react'
import './Section4.css'
import stol from "../../../assets/images/stol.jpg"
function Section4() {

  return (
    <>
   <div className="hello-bobo">
        
 
        <div className="hello-left">
            <h2 className='hello-salom'>
                Everything you can do in a physical classroom, <span> you can do with Skilline</span>
            </h2>
            <p className='pop'>Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
            <a className='ass' href="#">Learn more</a>
        </div>

        <div className="hello-right">
<img src={stol} alt="" />        
        </div>
    </div>
    </>
  )
}

export default Section4