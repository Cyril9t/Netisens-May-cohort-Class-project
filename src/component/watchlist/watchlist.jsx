import React, { useEffect, useState } from 'react';
import './watchlist.css';
import Navbar from '../shared/Navbar';

export default function Watchlist() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const Movies = localStorage.getItem("Movie")
        setMovies(JSON.parse(Movies))

        console.log(movies)


    }, [])



    return (
        <div>
            <Navbar />
            <div className="watchlist-container">

                <header className="header">
                    <h1>My Watchlist</h1>
                    <p>Movies you've saved for later.</p>
                </header>

                <div className="movie-grid">
                    {movies?.map((movie) => (
                        <div key={movie?.id} className="movie-card">
                            <div className="poster-wrapper">
                                <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
                            </div>
                            <div className="card-info">
                                <h3 className="movie-title">{movie?.title}</h3>
                                <div className="rating">
                                    <span className="star">★</span>
                                    <span>{movie?.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}