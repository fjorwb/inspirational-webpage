import '../../styles/quote.css'

function Quote() {
  const quote = `That's the risk you take if you change: that people you've been involved with won't like the new you. But other people who do will come along. —Lisa Alther`

  return (
    <div className='quotecontainer'>
      <p className='quote'>{quote}</p>
    </div>
  )
}

export default Quote
