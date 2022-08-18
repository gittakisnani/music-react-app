import axios from "axios";
const BASE_URL = "https://fast-scrubland-49668.herokuapp.com/"

export default axios.create({
    baseURL: BASE_URL
})


export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 
        'Content-Type': 'application/json',
        'origin': "https://gittakisnani.github.io/music-react-app/"
    },
    withCredentials: true
})