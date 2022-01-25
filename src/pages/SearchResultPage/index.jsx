import debounce from "just-debounce-it"
import { useCallback, useEffect } from "react"
import { ListOfGifs } from "../../components/ListOfGifs"
import { Spinner } from "../../components/Spinner"
import { Title } from "../../components/Title"
import { useGifs } from "../../hooks/useGifs"
import { useObserver } from "../../hooks/useObserver"

export const SearchResultPage = ({ params }) => {
  const { keyword } = params
  const { gifs, loading, error, setPage } = useGifs({ keyword })
  const { observerRef, show } = useObserver({ rootMargin: '300px' })

  const handleNextPageDebounce = useCallback(debounce(() => setPage(lastPage => lastPage + 1), 300, true), [])

  useEffect(() => {
    if (show) handleNextPageDebounce()
  }, [show, handleNextPageDebounce])

  if (error) return <p>Hubo un error: {error}</p>

  return <section className="min-h-screen">
    <Title>Resultado de la busqueda</Title>
    {
      loading
        ? <Spinner />
        : <ListOfGifs gifs={gifs} />
    }
    <div ref={observerRef}></div>
  </section>
}