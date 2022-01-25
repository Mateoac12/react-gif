import { API_KEY } from '../config/constants'

export const getTrends = () => {
  const trends = fetch(
    `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`
  )
    .then((res) => res.json())
    .then(({ data }) => data)

  return trends
}
