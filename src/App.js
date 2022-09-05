import './App.scss';
import axios from "axios";
import {useState} from "react";
import MovieList from "./components/MovieList/MovieList";
import ErrorCard from "./components/ErrorCard/ErrorCard";

function App() {

    const [isLoading, setIsLoading] = useState(false);
    const [reqError, setReqError] = useState({isError: false, errorCode: '', errorMessage: ''});
    const [movieList, setMovieList] = useState([]);

    const fetchMoviesHandler = async () => {
        setIsLoading(true)
        try {
            const response = await axios.get('https://swapi.dev/api/films/');
            if (response.status === 200) {
                const data = await response.data;
                setMovieList((prevMovies) => //update movies, added top recently fetched data
                    (prevMovies.concat(data.results.map(movie => {
                            return movie;
                        }))));
            }
            setIsLoading(false)
        } catch (err) {
            setReqError({isError: true, errorCode: err.code, errorMessage: err.message});
            setIsLoading(false)
        }
     }

    return (<>
        {/*loading*/}
        {isLoading && <span>loading</span>}

        {/*display error*/}
        {reqError.isError && <ErrorCard errors={reqError}/>}

        <button onClick={fetchMoviesHandler}>Fetch Movies</button>

        {!reqError.isError && movieList.length !== 0 && <section>
            <MovieList movies={movieList}/>
        </section>}
    </>);
}

export default App;
