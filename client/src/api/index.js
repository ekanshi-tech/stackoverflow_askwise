import axios from 'axios'//axios are used to handle request to send data from the backend and retrieve data from the backend

const API=axios.create({baseURL : "http://localhost:5000" })

export const login = (authData) => API.post('/user/login',authData)
export const signup = (authData) => API.post('/user/signup',authData)