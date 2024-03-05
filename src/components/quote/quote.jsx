import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchQuote } from '../../slices/quoteSlice'

import '../../styles/quote.css'

function Quote() {
  const quote = useSelector((state) => state.quote.quote)
  // console.log(quote)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchQuote())
  }, [dispatch])

  return (
    <div className='quotecontainer'>
      <p className='quote'>{quote}</p>
    </div>
  )
}

export default Quote
