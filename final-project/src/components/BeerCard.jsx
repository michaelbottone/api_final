
const BeerCard = (props) => {

  return (
  <div>
    {
      props.beers.map((beer) => (
        <div key={beer.name} className="card">
          <img src={`${beer.image_url}`} width="50px" alt="poster" />
          <h3>{beer.name}</h3>
          {/* <button>View Movie</button> */}
        </div>
      ))
    }
    </div>
  )}

export default BeerCard