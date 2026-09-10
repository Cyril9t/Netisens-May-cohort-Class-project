
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie, seeAll }) => {

    return (
        <div className="movie">
            <Link to={`/${movie.title}/${movie.id}`} className="link">
                <article className={seeAll ? "movie-card-flex" : "movie-card"}>

                    <div className="movie-poster-container">

                        <img
                            className="movie-poster"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />



                    </div>

                    <div className="movie-info">

                        <h3 className="movie-title">
                            {movie.title ? movie.title : movie.name}
                        </h3>

                        <p className="movie-meta">
                            {movie.release_date ? movie.release_date : movie.first_air_date} •
                        </p>


                    </div>

                </article>

                <div className="movie-rating">

                    <span className="">
                        ⭐ {movie.vote_average}
                    </span>
                </div>
            </Link>

        </div>
    );
};

export default MovieCard;