import _axios, { AxiosInstance } from 'axios'

const END_POINT: string = 'https://pokeapi.co/api'
const VERSION: string = 'v2'

const axios: AxiosInstance = _axios.create({
  baseURL: `${END_POINT}/${VERSION}`,
})

export default axios
