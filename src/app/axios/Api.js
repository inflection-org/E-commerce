import axios from 'axios'
import { getCookie } from './CookieConfig'

const instance = axios.create({
  baseURL: 'http://192.168.2.120:5000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCookie('access_token')}`,
  },
  timeout: 10000,
})

export function setToken(t) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${t}`
  console.log(instance.defaults)
}

export default instance
