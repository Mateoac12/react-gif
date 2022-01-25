import React, { Suspense } from "react"
import { useObserver } from "../../hooks/useObserver"

const ListOfTerms = React.lazy(() => import("../../components/ListOfTerms"))

const LazyListOfTrends = () => {
  const { observerRef, show } = useObserver({ onlyOneView: true })

  return <div ref={observerRef} >
    <Suspense fallback={null}>
      {
        show ?
          <ListOfTerms title="Tendencias" />
          : null
      }
    </Suspense>
  </div>
}

export default React.memo(LazyListOfTrends)