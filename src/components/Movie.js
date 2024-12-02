import React, { useEffect, useState } from 'react'

export default function Movie() {
    const [movieList,setMovieList]=useState([])
    const getmovie=()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=8e3a61d359463f8f709da368affb1d15")
        .then((response)=>response.json())
        .then((data)=>setMovieList(data.results))
    }
    useEffect(()=>{
        getmovie();
},[])
console.log(movieList)
  return (
    <div>
        <h1>Films Populaires</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                {movieList.map(movie => (
                    <div  style={{ margin: '10px' }}key={movie.id} >
                        <h2>{movie.title}</h2>
                        <h2>{movie.price}</h2>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>
                ))}
            </div>
        </div>
      
    
  )
}

