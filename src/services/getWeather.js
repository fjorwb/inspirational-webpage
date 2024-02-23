// import axios from 'axios'

const url =
  'https://api.openweathermap.org/data/2.5/weather?lat=-12.09645155&lon=-76.99568986771155&appid=7c4780e83d9cbb9bbc9d0f863c745130&units=metric'

export const getWeather = async () => {
  return await fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)

  // const resp = await axios(url)

  // console.log(resp)

  // return resp
}
