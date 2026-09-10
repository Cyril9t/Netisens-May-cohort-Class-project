
const getMovies = async (endpoint) => {
    const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    if (!response.ok) {
        alert('Error Fetching Movie...')
    }
    const data = await response.json();
    return data.results;
};

export default getMovies