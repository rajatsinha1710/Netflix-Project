import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './request'

function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData()
        {
            const response = await axios.get(requests.fetchNetflixOriginals)
        setMovie(
            response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
            ]
        )
        return response
    }
        fetchData()
    },[])

    console.log(movie);

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + ' ...': string;
    }
  return (
    <header className='banner' style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }}>
        <div className="banner-content">
            <h1 className="banner-title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner-buttons">
                <button className='banner-btn'>Play</button>
                <button className='banner-btn'>My list</button>
            </div>
            <h1 className="banner-desc"> {truncate(movie?.overview, 200)}</h1>
        </div>
        <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner