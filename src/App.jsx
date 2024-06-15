import { useState } from 'react'
import Home from './Pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='m-20'>
      <Home/>
      </div>
      
    </>
  )
}

export default App
