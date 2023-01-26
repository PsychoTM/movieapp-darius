import Head from 'next/head'
import { useEffect } from 'react'
import { useState } from 'react'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'


//Main app function
export default function Home() {

const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

//useEffect to call searchMovies
useEffect(() => {
searchMovies('Superman');
}, []);


  //Movie API variable + search function
const searchMovies = async (title: string) => {
const response = await fetch(`http://www.omdbapi.com?apikey=a79b6f21&s=${title}`);
const data = await response.json();

setMovies(data.Search);
};

  return (
    <>
      <Head>
        <title>Movie App Darius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>

        <div className='app'>
          <h1>Movie App</h1>

          <div className='search'>
            <input placeholder='Search for movies'
            value={searchTerm}
            onChange = {(e) => setSearchTerm(e.target.value)}/>

            <img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTerm)}/>
          </div>

          {
            movies?.length > 0 
            ? (
               <div className='container'>
                  {movies.map((movie)=>{
                  return (<MovieCard movie = {movie}/>
                  )}
                  )}
                </div>
          ) : (
            <div className='empty'>
              <h2>No movies found!</h2>
            </div>
          )
          }

         
          </div>
      </main>
    </>
  )
}
