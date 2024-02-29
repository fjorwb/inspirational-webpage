const API_URL = 'https://api.quotable.io/quotes/random?tags=technology,famous-quotes'

export const getRandomQuote = async () => {
  const response = await fetch(API_URL)
  const json = await response.json()

  console.log(json)

  return json
}

export default getRandomQuote
