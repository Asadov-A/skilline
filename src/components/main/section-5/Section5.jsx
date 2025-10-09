import './Section5.css'
import grle from '../../../assets/images/group122.png'

function Section5() {
  return (
    <div className="bobo">
      <h1>
        Our <span>Features</span>
      </h1>
      <p className="hello-subtitle">
        This very extraordinary feature, can make learning activities more efficient
      </p>
      <div className="hello-kotta">
        <div className="hello-left">
          <h2>
            <span>Tools</span> For Teachers And Learners
          </h2>
          <p>
            Class has a dynamic set of teaching tools built to be deployed and used during class.
            Teachers can handout assignments in real-time for students to complete and submit.
          </p>
        </div>
        <div className="hello-right">
          <img src={grle} alt="features illustration" />
        </div>
      </div>
    </div>
  )
}

export default Section5
