import { useContext } from 'react'
import { GifsContext } from '../context/GifsContext'

export const useGlobalGifs = () => {
  const { gifs, setGifs } = useContext(GifsContext)

  return {
    gifs,
    setGifs,
  }
}
