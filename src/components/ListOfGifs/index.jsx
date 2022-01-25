import GifItem from '../GifItem'

export const ListOfGifs = ({ gifs }) => {

  if (!Array.isArray(gifs) || gifs.length === 0) return <h1>No hay resultados</h1>

  return <section className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
    {
      gifs.map(({ title, url: imageUrl, id }) => <GifItem title={title} imageUrl={imageUrl} id={id} key={id} />)
    }
  </section>
}