import { ListOfGifs } from "../../components/ListOfGifs"
import { Spinner } from "../../components/Spinner"
import { Title } from "../../components/Title"
import { useGifs } from "../../hooks/useGifs"

export const SearchResultPage = ({ params }) => {
  const { keyword } = params
  const { gifs, loading, error, setPage } = useGifs({ keyword })

  const handleNextPage = () => {
    setPage(lastPage => lastPage + 1)
  }

  if (error) return <p>Hubo un error: {error}</p>

  return <>
    <Title>Resultado de la busqueda</Title>
    {
      loading
        ? <Spinner />
        : <ListOfGifs gifs={gifs} />
    }
    <button onClick={handleNextPage} className="border px-4 py-2 m-8 mx-auto">Siguiente pagina</button>
  </>
}