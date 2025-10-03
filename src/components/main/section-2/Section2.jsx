import { useState } from 'react'
import './Section2.css'
import google from '../../../assets/icons/google.png'
import netflix from '../../../assets/icons/netflix.png'
import airbnb from '../../../assets/icons/airbnb.png'
import amazon from '../../../assets/icons/amazon.png'
import facebook from '../../../assets/icons/facebook.png'
import grab from '../../../assets/icons/grab.png'


function Section2() {

  return (
    <>
    <section className='section-2'>
    <p>Trusted by 5,000+ Companies Worldwide</p>

    <div className="company-box">
  <img src={google} alt="google-logo" />
  <img src={netflix} alt="netflix-logo" />
    <img src={airbnb} alt="airbnb-logo" />
      <img src={amazon} alt="amazon-logo" />
        <img src={facebook} alt="facebook-logo" />
          <img src={grab} alt="grab-logo" />
    </div>
    </section>
    </>
  )
}

export default Section2