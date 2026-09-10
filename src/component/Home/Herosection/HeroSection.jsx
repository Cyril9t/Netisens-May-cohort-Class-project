import { useState } from "react";
import "./HeroSection.css";

const HeroSection = ({ movie }) => {
    return (
        <section className="hero">

            <div className="image-banner ">

                <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" className="banner" />
            </div>
            <div className="hero-overlay">
                <div className="hero-content">

                    <span className="hero-badge">
                        FEATURED MOVIE
                    </span>

                    <h1 className="hero-title">
                        {movie?.title}
                    </h1>

                    <div className="hero-meta">
                        <span>⭐ {movie?.vote_average}</span>
                        <span>{movie?.release_date}</span>
                    </div>

                    <p className="hero-description">
                        {movie?.overview}
                    </p>

                    <div className="hero-actions">

                        <button
                            className="hero-primary-button"

                        >

                            ▶ Watch Trailer
                        </button>

                        <button className="hero-secondary-button">
                            + Add to Watchlist
                        </button>

                    </div>




                    {/* <div className="hero-trailer">
                        <div className="trailer-placeholder">
                            <span>▶</span>
                            <p>Trailer is playing...</p>
                        </div>
                    </div> */}


                </div>
            </div>

        </section>
    );
};

export default HeroSection;