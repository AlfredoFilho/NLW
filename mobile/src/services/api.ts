import axios from 'axios'

const ipv4Address = 'http://192.168.15.24'

const api = axios.create({ 
    baseURL: `${ipv4Address}:3333`
 })

 export default api