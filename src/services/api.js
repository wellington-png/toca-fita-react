import axios from "axios"


const api = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0/',
  params: {
    api_key: '83ca6c288151548f540a548239873f3e',
    format: 'json'
  }
})


// Application name	Toca Fita22
// API key	83ca6c288151548f540a548239873f3e
// Shared secret	a4e18dbaed8ccf2fcd87bf1932ca522d
// Registered to	wellingtonasc38



export default api