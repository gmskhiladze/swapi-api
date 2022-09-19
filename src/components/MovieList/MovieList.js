import React from 'react';

function MovieList({movies}) {
    console.log(movies)
    return (
        <ul>
            {movies.map((movie, index) => (
                // <Movie
                //     key={movie.id}
                //     title={movie.title}
                //     releaseDate={movie.releaseDate}
                //     openingText={movie.openingText}
                // />
                <li key={index}>
                    <span>{movie.title}</span>
                    <span>{movie.releaseDate}</span>
                    <span>{movie.openingText}</span>
                </li>
            ))}
        </ul>
    )
}

export default MovieList;