import { useCatImg } from '../hooks/useCatImg'

function Otro () {
  const { urlImg } = useCatImg({ fact: 'strong' })
  return (
    <>
      {urlImg && <img src={urlImg} />}
    </>
  )
}

export default Otro
