import Card from '../../component/MovieDetails/MovieCard';
import './MovieDetail.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../../component/shared/Navbar';
const movieData = {
    title: "The Dark Knight",
    rating: "9.0",
    year: "2008",
    duration: "2h 32m",
    genres: ["Action", "Crime", "Drama"],
    synopsis: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, he sets out to dismantle the remaining criminal organizations that plague the streets.",
    poster: "https://via.placeholder.com/300x450",
    overview: [
        { label: "Director", value: "Christopher Nolan" },
        { label: "Budget", value: "$185 million" },
        { label: "Writers", value: "Jonathan Nolan, Christopher Nolan" },
        { label: "Revenue", value: "$1.0 billion" },
        { label: "Release Date", value: "July 18, 2008" },
        { label: "Status", value: "Released" }
    ],
    cast: [
        { name: "Christian Bale", role: "Bruce Wayne", img: "https://via.placeholder.com/80" },
        { name: "Heath Ledger", role: "Joker", img: "https://via.placeholder.com/80" },
        { name: "Aaron Eckhart", role: "Harvey Dent", img: "https://via.placeholder.com/80" },
        { name: "Michael Caine", role: "Alfred", img: "https://via.placeholder.com/80" },
        { name: "Gary Oldman", role: "Jim Gordon", img: "https://via.placeholder.com/80" }
    ]
};

export default function MovieDetail() {

    const [movieData, setMovieData] = useState()
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [watchList, setWatchlist] = useState(false);
    const apiKey = import.meta.env.VITE_TMDB_API_KEY

    useEffect(() => {

        const fetchDetails = async () => {
            setIsLoading(true)
            try {
                const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=credits,videos`)
                const data = await resp.json()
                console.log(data)
                setMovieData(data)
                console.log(data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }

        fetchDetails()
    }, [])



    const runtime = (runtime) => {
        const hr = Math.floor(runtime / 60)
        const mins = runtime % 60;

        return <span>{`${hr}hr: ${mins}mins `}</span>
    }

    const AddToWatchList = (movie) => {
        const movies = JSON.parse(localstorage.getItem("movie")) || []
        movies.push(movie)
        localStorage.setItem("movie", JSON.stringify(movies))
        setWatchlist(true)
    }


    if (isLoading) return <p>Loading ....</p>

    return (

        <div>
            <Navbar />
            <div className="movie-page">



                <div className="hero-banner" style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData?.backdrop_path})`,
                }}
                />
                <div className='hero-overlay'>
                    <div className="content-container">


                        <Card variant="poster" image={movieData?.poster_path} />

                        <div className="details-section">
                            <h1 className="title">{movieData?.title}</h1>

                            <div className="meta">
                                <span className="rating">★ {movieData?.vote_average}</span>
                                <span> {movieData?.release_date} {" "}</span>
                                <span>{runtime(movieData?.runtime)}</span>
                            </div>

                            <div className="genres">
                                {movieData?.genres?.map((g) => <span className="tag">{g.name}</span>)}
                            </div>

                            <p className="synopsis">{movieData?.overview}</p>

                            <div className="actions">
                                <button className="btn btn-primary" onClick={() => AddToWatchList(movieData)} >{watchList ? "Added" : "+ Add to Watchlist"}</button>
                                <button className="btn btn-secondary">▶ Watch Trailer</button>
                            </div>

                            {/* https://zyloo-api-v1.onrender.com/auth/login */}
                            {/* https://zyloo-api-v1.onrender.com/auth/register */}
                            <div className="section-title">Overview</div>

                            <div className="overview-grid">

                                <div className="info-item">
                                    <div>
                                        <p className="label">Revenue</p>
                                        <p className="value">${movieData?.revenue}</p>
                                    </div>
                                    <div>
                                        <p className="label">popularity</p>
                                        <p className="value">{movieData?.popularity}</p>
                                    </div>
                                </div>

                            </div>


                            <div className="section-title">Top Cast</div>
                            <div className="cast-list">
                                {movieData?.credits?.cast?.map((actor) => (
                                    <Card
                                        key={actor.name}
                                        variant="cast"
                                        image={actor.profile_path}
                                        title={actor.name}
                                        subtitle={actor.character}

                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}