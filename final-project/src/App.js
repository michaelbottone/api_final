import { useState, useEffect } from 'react'
import axios from 'axios'
import BeerCard from './components/BeerCard'
import './App.css'

function App() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    const getBeers = async () => {
      const response = await axios.get(`https://api.punkapi.com/v2/beers/1`)
      setBeers(response.data)
      console.log(response.data)
    }
    getBeers()
  }, [])

  return (
    <div>
      <BeerCard beers={beers} />
    </div>
  )
}

export default App
