import { useState } from 'react'
import CatergoryList from './components/CategoryList'
import Form from './components/Form'
import FactList from './components/FactList'

import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='header-title'>Today I learned</h1>
      <div>
        <Form />
      </div>
      <div>
        <CatergoryList />
        <FactList />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
