import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()
  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact)) // → then(setFact)
  }

  useEffect(refreshFact, []) // recuperar la cita al cargar la pag
  return { fact, refreshFact }
}
