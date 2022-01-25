import { createContext, useState } from "react";

export const GifsContext = createContext({ error: 'Access not allowed' })

export const GifContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([])

  return <GifsContext.Provider value={{ gifs, setGifs }}>
    {children}
  </GifsContext.Provider>
}