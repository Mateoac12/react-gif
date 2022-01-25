import React from "react"
import { ListOfGifs } from "../../components/ListOfGifs"
import LazyListOfTrends from "../../components/ListOfTerms/LazyListOfTerms"
import { Spinner } from "../../components/Spinner"
import { Title } from "../../components/Title"

import { useGifs } from "../../hooks/useGifs"


export const HomePage = () => {
  const { gifs, loading, error } = useGifs()

  if (error) return <p>Error: {error}</p>

  return <main className="flex flex-col gap-16 lg:flex-row">
    <section className="flex-1" style={{ minHeight: '100vh' }}>
      <Title>Última búsqueda</Title>
      {
        loading
          ? <Spinner />
          : <ListOfGifs gifs={gifs} />
      }
    </section>
    <LazyListOfTrends />
  </main>
}