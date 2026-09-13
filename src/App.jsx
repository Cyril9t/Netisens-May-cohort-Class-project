import Login from "./component/Auth/Login"
import Register from "./component/Auth/register"
import Watchlist from "./component/watchlist/watchlist"
import Home from "./Pages/Home/Home"
import MovieDetail from "./Pages/MovieDetails/MoviesDetails"
import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "./protectedRoutes/protectedRoute"
function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />} >
        <Route path="/:id/:id" element={<MovieDetail />} />
        <Route path="/Watchlist" element={<Watchlist />} />
      </Route>

    </Routes>
  )
}

export default App
