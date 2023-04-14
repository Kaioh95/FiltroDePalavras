import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormaPage from './pages/FormPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormaPage/>
    </div>
  )
}

export default App
