import { useState } from 'react'
import './Footer.css'

function Footer() {

  return (
    <>
     <footer className="footer">
      <div className="footerimg">
        <img src="./footer.png" alt="" />
      </div>
      <p className="footerp">Subscribe to get our Newsletter</p>

      <div className="email">
       <form>
        <input  placeholder="Enter your Email" type="email" />
       </form>
        <a target="_blank" href="https://space.marsit.uz/"
          ><button>Subscribe</button></a
        >
      </div>

      <div className="terms">
          <p className="line">Careers</p>
          <p className="line">Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <p className="oxiri">© 2021 Class Technologies Inc. </p>
    </footer>
    </>
  )
}

export default Footer