import axios from './axios'
import React, { useState, useEffect } from 'react'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    const base_Url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(fetchUrl)
            setMovies(response.data.results)
            return response
        }

        fetchData()
    },[fetchUrl])

    const opts = { 
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1 },
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParam = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParam.get("v"))
            }).catch((error) => console.log(error))
        }
    }

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row-posters">
        {movies.map((movie)=> (
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
                <img onClick={() => handleClick(movie)}
            src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row-poster ${isLargeRow && 'row-poster-large'}`} key={movie.id} /> 
            )
            
        ))}
        {/* <h4 className="movie-title">
                {movie?.title || movie?.name || movie?.original_name}
            </h4> */}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
} 

export default Row