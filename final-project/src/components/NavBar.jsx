

const NavBar = (props) => {

return(
  <div className="nav">
  {
  // props.beers.map((beer) => (
    <div>
    <div>
    <ul className="nav-links">
    <li>Home</li>
    <li>About</li>
    <li>Purchase</li>
    </ul>
  </div>
  <div>
  {/* <img src={`${beer.image_url}`} height="120px" alt="beer-pic" /> */}
  </div>
  </div>
  // ))}
}
  </div>
)
}

export default NavBar