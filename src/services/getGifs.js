import { API_KEY } from '../config/constants'

export const getGifs = ({
  keyword = '',
  limit = 25,
  lang = 'es',
  rating = 'g',
  offset = 0,
}) => {
  const ENCODE_SEARCH = encodeURIComponent(keyword)

  const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${ENCODE_SEARCH}&limit=${limit}&offset=${
    offset * limit
  }&rating=${rating}&lang=${lang}`

  const result = fetch(BASE_URL)
    .then((res) => res.json())
    .then(({ data }) => {
      if (Array.isArray(data)) {
        const gifs = data.map((singleGif) => {
          const { id, title, images } = singleGif
          const { url } = images.original
          return { id, title, url }
        })

        return gifs || []
      }
    })

  return result
}
