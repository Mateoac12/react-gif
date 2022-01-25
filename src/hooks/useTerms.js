import { useEffect, useState } from 'react'
import { getTrends } from '../services/getTrends'

export const useTerms = () => {
  const [terms, setTerms] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getTrends().then(setTerms).catch(setError)
  }, [])

  return {
    terms,
    error,
  }
}
