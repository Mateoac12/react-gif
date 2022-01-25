import { useSingleGif } from "../../hooks/useSingleGif"

export const DetailPage = ({ params }) => {
  const { id } = params
  const { gif, error } = useSingleGif({ id })

  if (error) return <p>Hubo un error: <code>{error}</code></p>

  return <>
    <h1>Detail page of: {id}</h1>
    <img src={gif.url} alt={gif.title} />
  </>
}