import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function useCatImg({fact}){  // recuperar la img cada vez que tengamos una cita nueva
  const [urlImg, setUrlImg] = useState()
  useEffect(() => {
    if (!fact) return // si fact esta vacio no hago nada
    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
    .then( resp => resp.json())
    .then( json  =>{
      const { url } = json
      setUrlImg(url)
    })
  },[fact])
  return { urlImg }
}

function App () {
  const [fact, setFact] = useState()
  const { urlImg } = useCatImg({fact})

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
