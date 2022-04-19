import axios from './axios'
import React, { useState, useEffect } from 'react'
import './Row.css'

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([])

    const base_Url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(fetchUrl)
            setMovies(response.data.results)
            return response
        }

        fetchData()
    },[fetchUrl])
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row-posters">
        {movies.map((movie)=> (
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
                <img
            src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row-poster ${isLargeRow && 'row-poster-large'}`} key={movie.id} />  
            )
            
        ))}
        </div>
    </div>
  )
}

export default Row