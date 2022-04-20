import React from 'react'
import './homescreen.css'
import Nav from './Nav'
import Banner from './Banner'
import requests from './request'
import Row from './Row'

function Homescreen() {
  return (
    <div className='homescreen'>
        <Nav/>
        

        <Banner />


        <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} movie={requests.fetchNetflixOriginals.name}/>
        <Row title='Trending Now' fetchUrl={requests.fetchTrending}  movie={requests.fetchTrending.name} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} movie={requests.fetchTopRated.name}/>
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} movie={requests.fetchActionMovies.name}/>
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} movie={requests.fetchComedyMovies.name} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} movie={requests.fetchHorrorMovies.name}/>
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} movie={requests.fetchRomanceMovies.name}/>
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} movie={requests.fetchDocumentaries.name}/>
    </div>
  )
}

export default Homescreen