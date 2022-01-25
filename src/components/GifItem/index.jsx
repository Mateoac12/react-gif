import React from "react"
import { useLocation } from "wouter"

const GifItem = ({ title, imageUrl, id }) => {
  const [, setLocation] = useLocation()

  const handleOpenGif = () => {
    setLocation(`/gif/${id}`)
  }

  return <figure className=" relative cursor-pointer" onClick={handleOpenGif}>
    <p className="absolute bottom-0 left-0 p-2 w-full bg-slate-50">{title}</p>
    <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
  </figure>
}

export default React.memo(GifItem)