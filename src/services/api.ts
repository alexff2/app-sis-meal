import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'
console.log(baseURL)

export const api = axios.create({
  baseURL
})