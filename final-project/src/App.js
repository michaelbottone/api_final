import { useState, useEffect } from 'react'
import axios from 'axios'
import BeerCard from './components/BeerCard'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  const [beers, setBeers] = useState([])
  useEffect(() => {
    const getBeers = async () => {
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers?per_page=30`
      )
      setBeers(response.data)
      console.log(response)
    }
    getBeers()
  }, [])

  return (
    <div>
      <NavBar beers={beers} />

      <div className="cards">
        {beers.map((beer) => (
          <BeerCard beer={beer} key={beer.id} />
        ))}
      </div>
    </div>
  )
}

export default App
