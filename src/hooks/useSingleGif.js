import { useEffect, useState } from 'react'
import { getSingleGif } from '../services/getSingleGif'
import { useGlobalGifs } from './useGlobalGif'

export const useSingleGif = ({ id }) => {
  const { gifs: gifsOfContext } = useGlobalGifs()

  const [error, setError] = useState(null)
  const [gif, setGif] = useState(
    () => gifsOfContext.find((gif) => gif.id === id) || []
  )

  useEffect(() => {
    if (gif.length === 0) {
      getSingleGif({ id }).then(setGif).catch(setError)
    }
  }, [id])

  return {
    gif,
    error,
  }
}
