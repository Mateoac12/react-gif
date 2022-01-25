import React, { Suspense } from "react"
import { ListOfGifs } from "../../components/ListOfGifs"
import { Spinner } from "../../components/Spinner"
import { Title } from "../../components/Title"

import { useGifs } from "../../hooks/useGifs"
import { useObserver } from "../../hooks/useObserver"

const ListOfTerms = React.lazy(() => import("../../components/ListOfTerms"))

export const HomePage = () => {
  const { gifs, loading, error } = useGifs()
  const { observerRef, show } = useObserver()

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
    <div ref={observerRef}>
      <Suspense fallback={null}>
        {
          show ?
            <ListOfTerms title="Tendencias" />
            : null
        }
      </Suspense>
    </div>
  </main>
}