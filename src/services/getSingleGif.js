import { API_KEY } from '../config/constants'

export const getSingleGif = ({ id }) => {
  const gifFound = fetch(
    `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`
  )
    .then((res) => res.json())
    .then(({ data }) => {
      const { id, title, images } = data
      const { url } = images.original
      return { id, title, url }
    })
    .catch((err) => {
      console.error(err)
      return err
    })

  return gifFound
}
