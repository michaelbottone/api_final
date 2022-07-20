
const BeerCard = (props) => {

  return (
  
        <div className="card">
          <img src={`${props.beer.image_url}`} height="120px" alt="beer-pic" />
          <h1>{props.beer.name}</h1>
          <h2>{props.beer.tagline}</h2>
          <h3>ABV: {props.beer.abv}</h3>
          <p className="desc"><em>{props.beer.description}</em></p>
          <div className="bullets">
          <div className="hops">
          <h4>Hops</h4>
          <ul>{props.beer.ingredients.hops.map((hop) => (
          <li>{hop.name}</li>
          ))}</ul>
          </div>
          <div className="malts">
          <h4>Malts</h4>
          <ul>{props.beer.ingredients.malt.map((malt) => (
          <li>{malt.name}</li>
          ))}</ul>
          </div>
          </div>
          <h4>Yeast</h4><ul><li>{props.beer.ingredients.yeast}</li></ul>

        </div>

  )}

export default BeerCard