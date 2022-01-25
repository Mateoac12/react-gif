import { useEffect, useState } from 'react'
import { getGifs } from '../services/getGifs'
import { useGlobalGifs } from './useGlobalGif'

const INITIAL_PAGE = 0

export const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useGlobalGifs()
  const keywordToUse = keyword || localStorage.getItem('lastSearches')

  useEffect(() => {
    getGifs({ keyword: keywordToUse })
      .then((gifs) => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastSearches', keywordToUse)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [keywordToUse])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    getGifs({ keyword, offset: page }).then((newGifs) => {
      setGifs((lastGifs) => lastGifs.concat(newGifs))
    })
  }, [page])

  return {
    gifs,
    loading,
    error,
    setPage,
  }
}
