import { useEffect } from 'react'
import { useState } from 'react'
import './app.css'
import MovieCard from './MovieCard'


// 90e51fed

const API_URL = 'http://www.omdbapi.com?apikey=90e51fed' 

// Remove unused variable declaration
// Fix indentation

const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const SearchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
    } 

    useEffect(() => {
        SearchMovies('Matrix')
    }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>

        <div className='search'>
            <input 
                placeholder='Search...'
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img 
                src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                alt="search"
                onClick={() => SearchMovies(searchTerm)}
            />
        </div>

        {
            movies?.length > 0 
            ? (
                <div className='container' >
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='container' >
                    <h2>No movies found</h2>
                </div>
            )
        }
    </div>
  )
}

export default App