import React from 'react';
import { SingleMovie } from './SingleMovie';

export const MovieList = ({ movieList, getMovieList }) => {
    return (
        <div>
            {movieList.map((movie) => (
                <SingleMovie key={movie.id} movie={movie} getMovieList={getMovieList} />
            ))}
        </div>
    );
}
