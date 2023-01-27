import './App.css'
import { useCatImg } from './hooks/useCatImg'
import { useCatFact } from './hooks/useCatFact'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { urlImg } = useCatImg({ fact })

  const handleClick = () => {
    refreshFact()
  }
  return (
    <main>
      <h1>Aplicacion de gatitos</h1>
      <button onClick={handleClick} className=''>
        Get new fact
      </button>
      {fact ? <p>{fact}</p> : null}
      {urlImg && (
        <img
          src={urlImg}
          alt=' image extracted using the first three word for cat'
        />
      )}
    </main>
  )
}

export default App
