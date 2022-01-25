import React from 'react'

export const Title = React.memo(({ children }) => {
  return <h1 className="text-4xl my-8">{children}</h1>
})