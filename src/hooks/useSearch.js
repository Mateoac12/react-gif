import { useState } from 'react'
import { useLocation } from 'wouter'

export const useSearch = () => {
  const [value, setValue] = useState('')
  const [, setLocation] = useLocation()

  const handleChange = (evt) => setValue(evt.target.value)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (value.trim() === '') return
    setLocation(`/search/${value}`)
  }

  return {
    value,
    handleChange,
    handleSubmit,
  }
}
