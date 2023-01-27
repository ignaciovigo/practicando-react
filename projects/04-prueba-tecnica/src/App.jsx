import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { useCatImg } from './hooks/useCatImg'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function App () {
  const [fact, setFact] = useState()
  const { urlImg } = useCatImg({ fact })

  useEffect(() => {
    getRandomFact().then(setFact) // → then(newFact => setFact(newFact))
  }, [])

  const handleClick = () => {
    getRandomFact().then(setFact)
  }
  return (
    <main>
      <h1>Aplicacion de gatitos</h1>
      <button onClick={handleClick} className=''>Get new fact</button>
      {fact ? <p>{fact}</p> : null}
      {urlImg && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}/${urlImg}`}
          alt=' image extracted using the first three word for cat'
        />
      )}
    </main>
  )
}

export default App
