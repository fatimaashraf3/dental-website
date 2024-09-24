import surgery1 from "../images/surgery1.jpg"
import surgery2 from "../images/surgery2.jpg"
import surgery3 from "../images/surgery3.jpg"
import "./surgery.css"

function Surgery(){
    return(
        <>
        <div className="surgery">
   <article className="card">
  <img
    className="card__background"
    src={surgery1}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width={1920}
    height={2193}
  />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title">General</h2>
      <p className="card__description">
      Everything you expect and then some. Cleanings, fillings, and x-rays are just the beginning.
      </p>
    </div>
    <button className="card__button">About general dentistry</button>
  </div>
</article>


<article className="card">
  <img
    className="card__background"
    src={surgery2}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width={1920}
    height={2193}
  />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title">Cosmetic</h2>
      <p className="card__description">
      Everything you expect and then some. Cleanings, fillings, and x-rays are just the beginning.
      </p>
    </div>
    <button className="card__button">About cosmetic dentistry</button>
  </div>
</article>


<article className="card">
  <img
    className="card__background"
    src={surgery3}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width={1920}
    height={2193}
  />
  <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title">Surgical</h2>
      <p className="card__description">
      We can fix anything. Our dentists repair damaged or lost teeth with cutting-edge implants and more.
      </p>
    </div>
    <button className="card__button">About surgical dentistry</button>
  </div>
</article>
</div>
</>

        
    )
}
export default Surgery