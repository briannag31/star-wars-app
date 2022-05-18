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
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/300px-Star_Wars_Logo.svg.png' alt='Star Wars Logo'/>
      <section className='cards'>
        {ships && ships.results.map(shipElement => (
          <Ship name={shipElement.name}/>
        ))}
      </section>
    </div> 
    )
  }
export default App;