import { useState, useEffect } from 'react'
import axios from 'axios'
import BeerCard from './components/BeerCard'

import './App.css'

function App() {
  const [beers, setBeers] = useState([])
  // const [maltIngredients, setMaltIngredients] = useState('')
  // const [hopsIngredients, setHopsIngredients] = useState('')
  useEffect(() => {
    const getBeers = async () => {
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers?per_page=80`
      )
      setBeers(response.data)
      console.log(response)
      // for (let i = 0; i < response.data.length; i++) {
      //   for (let j = 0; j < response.data[i].ingredients.malt.length; j++) {
      //     setMaltIngredients(response.data[i].ingredients.malt[j].name)
      //   }
      //   for (let k = 0; k < response.data[i].ingredients.hops.length; k++) {
      //     setHopsIngredients(response.data[i].ingredients.hops[k].name)
      //     console.log(hopsIngredients)
      //   }
      // }
    }
    getBeers()
  }, [])

  return (
    <div className="cards">
      {beers.map((beer) => (
        <BeerCard beer={beer} key={beer.id} />
      ))}
    </div>
  )
}

export default App
