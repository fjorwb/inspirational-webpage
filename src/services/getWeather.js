import axios from 'axios'

// const url =
//   'https://api.openweathermap.org/data/2.5/weather?lat=-12.09645155&lon=-76.99568986771155&appid=7c4780e83d9cbb9bbc9d0f863c745130&units=metric'

export const getWeather = () => {
  // const response = await fetch(
  //   'https://api.openweathermap.org/data/2.5/weather?lat=-12.09645155&lon=-76.99568986771155&appid=7c4780e83d9cbb9bbc9d0f863c745130&units=metric'
  // )
  //   .then((response) => response.json())
  //   .then((data) => data)

  const resp = axios
    .get(
      'https://api.openweathermap.org/data/2.5/weather?lat=-12.09645155&lon=-76.99568986771155&appid=7c4780e83d9cbb9bbc9d0f863c745130&units=metric'
    )
    .then((response) => response.data)

  return resp
}
