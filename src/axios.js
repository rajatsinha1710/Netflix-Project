import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;

//https://api.themoviedb.org/3/discover/movie?api_key=a93964a958d109931b81dc610aa748a7&with_genres=28