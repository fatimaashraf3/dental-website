
import './cards.css'
import dentist1 from "../images/dentist1.webp"
import dentist2 from '../images/dentist2.jpg'
import dentist3 from '../images/dentist3.jpg'

function Cards(){
    return(
        <>
        <div className="wrapper">
  <div className="cards">
    <div className="img-wrapper">
      <img src={dentist2} />
    </div>
    <div className="details">
      <h3>Rose Warner</h3>
      <h5>Senior dentist</h5>
      <div className="social-icons">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-twitter" />
        <i className="fab fa-instagram" />
      </div>
    </div>
  </div>
  <div className="cards">
    <div className="img-wrapper">
      <img src={dentist1} />
    </div>
    <div className="details">
      <h3>Mark Smith</h3>
      <h5>General dentist</h5>
      <div className="social-icons">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-twitter" />
        <i className="fab fa-instagram" />
      </div>
    </div>
  </div>
  <div className="cards">
    <div className="img-wrapper">
      <img src={dentist3}/>
    </div>
    <div className="details">
      <h3>Emily Mitchell</h3>
      <h5>Oral and maxillofacial surgeon</h5>
      <div className="social-icons">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-twitter" />
        <i className="fab fa-instagram" />
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default Cards