import { useState } from 'react' 
const BeerCard = (props) => {
  const [isShowing, setIsShowing] = useState(false)
  const [frontCard, setFrontCard] = useState(true)
  const truncate = (value) => {
    if(value.length > 200){
      value = value.substring(0, 220)
      let newValue = value + "..."
      return newValue
  }else{return value}
  }
const showDesc = () => {
  if(!isShowing){
  setIsShowing(true)
  }else{
    setIsShowing(false)
  }
}
const flipCard = () => {
  if(!frontCard){
  setFrontCard(true)
  }else{
    setFrontCard(false)
    
  }
}

  
  return (

    <div className="flip-card card">
    <div className="flip-card-inner">
      {frontCard ?  <div className="flip-card-front">
      <img src={`${props.beer.image_url}`} height="120px" alt="beer-pic" />
      <h1>{props.beer.name}</h1>
      <div className = "front-text">
          <h2>{props.beer.tagline}</h2>
          <h3>ABV: {props.beer.abv}</h3>
          {isShowing ?  <p className="desc"><em>{props.beer.description}</em></p> : <p className="desc"><em>{truncate(props.beer.description)}{props.beer.description.length > 220 ? <button onClick={showDesc}>{isShowing ? "hide" : "read more"}</button> : <></>}</em></p>}{frontCard ? <button onClick={flipCard}>Show Recipe</button> : <button onClick={flipCard}>Show Info</button>}</div>
      </div> : <div className="flip-card card flip-card-inner flip-card-front">
      <div className="bullets">
          <div className="hops">
          <h4>Hops</h4>
          <ul>{props.beer.ingredients.hops.map((hop) => (
          <li className="hopslist">{hop.name}</li>
          ))}</ul>
          </div>
          <div className="malts">
          <h4>Malts</h4>
          <ul>{props.beer.ingredients.malt.map((malt) => (
          <li className="maltlist">{malt.name}</li>
          ))}</ul>
          </div>
          </div>
          <h4>Yeast</h4><ul><li className="yeastlist">{props.beer.ingredients.yeast}</li></ul>
          {frontCard ? <button onClick={flipCard}>Show Recipe</button> : <button onClick={flipCard}>Show Info</button>}
      </div>}
  
    </div>
  </div>
  

  )}

export default BeerCard