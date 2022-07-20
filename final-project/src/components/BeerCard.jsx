
const BeerCard = (props) => {

  const truncate = (value) => {
    if(value.length > 200){
      value = value.substring(0, 220)
      let newValue = value + "..."
      return newValue
  }else{return value}
  }
  return (
  
    <div className="flip-card card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
      <img src={`${props.beer.image_url}`} height="120px" alt="beer-pic" />
      <h1>{props.beer.name}</h1>
          <h2>{props.beer.tagline}</h2>
          <h3>ABV: {props.beer.abv}</h3>
          <p className="desc"><em>{truncate(props.beer.description)}</em></p>
      </div>
      <div className="flip-card-back">
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
      </div>
    </div>
  </div>
  

  )}

export default BeerCard