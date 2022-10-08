import React, {useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function App() {
  const [breakLength, setBreakLength] = useState(8)
  const [sessionLength, setSessionLength] = useState(25)

  function reset() {
    setBreakLength(8)
    setSessionLength(25)
  }
  return (
    <div className='mx-auto w-[24rem]'>
      <Header breakLength={breakLength} setBreakLength={setBreakLength} sessionLength={sessionLength} setSessionLength={setSessionLength}/>
      <Main/>
      <Footer reset={reset}/>
    </div>
  )
}

export default App