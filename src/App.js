import './App.scss';
import axios from "axios";
import {useState} from "react";
import MovieList from "./components/MovieList/MovieList";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const fetchMoviesHandler =  async () => {
      const response = await axios.get('https://swapi.dev/api/films/');

      if (response.status === 200){
          const data = await response.data;
          setMovieList((prevState) =>
              ( [{
                  ...prevState,
                  results: data
              }])
          )
          console.log(data)
      }else{
          throw new Error(`Error: Status Code - ${response.status}`)
      }
      setTimeout( ()=>{
          console.log(`thia is a ${movieList}`)

      }, 1000)

  }

  return (
    <>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>

      <section>
        <MovieList movies={movieList}/>
      </section>
    </>
  );
}

export default App;
