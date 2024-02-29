// import { createApi } from 'unsplash-js'

// const unsplash = createApi({
//   accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
// })

const key = import.meta.env.VITE_UNSPLASHACCESSKEY

const API_URL = `https://api.unsplash.com/search/photos?client_id=${key}`

// export const getBackGroundImage = async () => {
//   const response = await unsplash.photos.getRandom({
//     count: 1,
//     query: 'landscape',
//   })
//   return response.response[0]
// }

function rnd() {
  console.log()
  return Math.floor(Math.random() * 9)
}

export const getBackGroundImage = async (query) => {
  let n = rnd()

  const response = await fetch(`${API_URL}&query=${query}`)
  const json = await response.json()

  return json.results[n].urls.regular
}
