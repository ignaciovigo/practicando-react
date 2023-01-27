import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact, getRandomImgByText } from './services/facts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function App () {
  const [fact, setFact] = useState()
  const [urlImg, setUrlImg] = useState()

  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  // recuperar la img cada vez que tengamos una cita nueva
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    getRandomImgByText(threeFirstWords).then(newUrl => setUrlImg(newUrl))
  }, [fact])

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
