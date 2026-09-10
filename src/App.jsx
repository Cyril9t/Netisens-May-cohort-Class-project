import Register from "./component/Auth/register"
import Watchlist from "./component/watchlist/watchlist"
import Home from "./Pages/Home/Home"
import MovieDetail from "./Pages/MovieDetails/MoviesDetails"
import { Route, Routes } from "react-router-dom"
function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id/:id" element={<MovieDetail />} />
      <Route path="/Watchlist" element={<Watchlist />} />
    </Routes>
  )
}

export default App
