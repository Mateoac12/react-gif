import { useSearch } from "../../hooks/useSearch"

export const SearchBar = () => {
  const { value, handleChange, handleSubmit } = useSearch()

  return <form className="border my-4 text-xl px-4 py-2" onSubmit={handleSubmit}>
    <input className="outline-none" value={value} onChange={handleChange} placeholder="Buscar..." />
  </form>
}