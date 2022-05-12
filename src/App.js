import { useState, useEffect } from 'react';
import Ship from "./components/Ship"
import './App.css';

function App() {
  const [ships, setShips] = useState(null)
  
  const getShip = async () =>{
    const response = await fetch("https://swapi.dev/api/starships/")

    const data = await response.json()
    setShips(data)
  }

  useEffect(() => {getShip()}, [])

  return(
    <div className = "App">
      <h1>Star Wars Starship Fleet</h1>
      <section>
        {ships && ships.results.map(shipElement => (
          <Ship name={shipElement.name}/>
        ))}
      </section>
    </div> 
    )
  }
export default App;