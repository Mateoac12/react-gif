import { useTerms } from '../../hooks/useTerms'
import { Title } from '../Title'

const ListOfTerms = ({ title }) => {
  const { terms } = useTerms()

  if (!Array.isArray(terms)) return null

  return <section className='flex flex-col'>
    <Title>{title}</Title>
    <ul className='flex flex-row flex-wrap gap-4 items-end lg:flex-col lg:flex-nowrap'>
      {
        terms.map(term => <li className='px-4 py-2 font-semibold border cursor-pointer hover:border-slate-400 text-right' key={term}>{term}</li>)
      }
    </ul>
  </section>
}

export default ListOfTerms