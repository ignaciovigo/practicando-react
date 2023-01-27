import { useEffect, useState } from 'react'

export function useCatImg ({ fact }) { // recuperar la img cada vez que tengamos una cita nueva
  const [urlImg, setUrlImg] = useState()
  useEffect(() => {
    if (!fact) return // si fact esta vacio no hago nada
    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(resp => resp.json())
      .then(json => {
        const { url } = json
        setUrlImg(url)
      })
  }, [fact])
  return { urlImg }
}
