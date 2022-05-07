import axios from 'axios'
import { getLocalStorage } from './helper'

export const request = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    ContentType: 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${getLocalStorage('token')}`,
  },
})
