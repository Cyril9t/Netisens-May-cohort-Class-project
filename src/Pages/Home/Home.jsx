import Navbar from "../../component/shared/Navbar";
import HeroSection from "../../component/Home/Herosection/HeroSection";
import SectionHeader from "../../component/Home/SectionHeader/SectionHeader";
import MovieCard from "../../component/Home/MovieCard/MovieCard";
import "./Home.css";
import { useEffect, useState } from "react";
import getMovies from "../../component/lib/FetchFunction"
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import Loading from "../../component/Loading/LoadingState";
function Home() {

  const [popular, setPopular] = useState([])
  const [trending, setTrending] = useState([])
  const [tvShows, setTvShows] = useState([])
  const [isSeeAll, setIsSeeAll] = useState(true)
  const [isLoading, setIsLoading] = useState(false);
  const [moviePosition, setMoviePosition] = useState(0)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      try {
        const popular = await getMovies("movie/popular")
        const trending = await getMovies("trending/movie/week")
        const tvShows = await getMovies("tv/popular")
        setTrending(trending)
        setPopular(popular)
        setTvShows(tvShows)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setError(error.message);

      }
    }
    fetch();
  }, [])

  const index = trending[moviePosition]

  useEffect(() => {
    const timer = setInterval(() => {
      setMoviePosition((prev) => prev === trending.length - 1 ? 0 : prev + 1)
      console.log(index)
    }, 6000)

    return () => clearInterval(timer)

  }, [trending.length])

  const seeAll = () => {
    setIsSeeAll(prev => !prev)
  }

  if (error) {
    return <h1>{error} Error loading video</h1>
  }




  return (
    <div className="home-page">

      <Navbar />
      <main>

        <HeroSection movie={index} />

        <section className="movies-section">

          <SectionHeader seeAll={seeAll} title="Popular Movies" />

          {isLoading ? <Loading /> :
            <div className={isSeeAll ? "movie-flex" : "movie-grid"}>
              {popular.map((movie) => {
                return (
                  <MovieCard key={movie.id} movie={movie} seeAll={isSeeAll} />
                )
              })}
            </div>
          }

        </section>


        <section className="movies-section">

          <SectionHeader seeAll={seeAll} title="Trending Movies" />
          {isLoading ? <Loading /> :
            <div className={isSeeAll ? "movie-flex" : "movie-grid"}>
              {trending.map((movie) => {
                return (
                  <MovieCard key={movie.id} movie={movie} seeAll={isSeeAll} />
                )
              })}
            </div>
          }

        </section>

        <section className="movies-section">

          <SectionHeader seeAll={seeAll} title="Tv Shows" />
          <div className={isSeeAll ? "movie-flex" : "movie-grid"}>
            {tvShows.map((movie) => {
              return (<MovieCard key={movie.id} movie={movie} seeAll={isSeeAll} />)
            })}
          </div>
        </section>

      </main>

    </div>
  );
};

export default Home;