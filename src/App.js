import { createContext, useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom'
import './App.css'
import Home from './Components/Filterbar/Home'
export const UserContext = createContext()
export const DataContext = createContext()

function App() {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('https://assessment.api.vweb.app/user')
      .then((response) => response.json())
      .then((data) => setUser(data))
  }, [])

  const [itemes, setItemes] = useState([])
  useEffect(() => {
    fetch('https://assessment.api.vweb.app/rides')
      .then((response) => response.json())
      .then((data1) => setItemes(Object.values(data1)))
  }, [])



 

  return (
    <DataContext.Provider value={[itemes, setItemes]}>
      <UserContext.Provider value={[user, setUser]}>
        <Home />
      </UserContext.Provider>
    </DataContext.Provider>
  )
}

export default App
