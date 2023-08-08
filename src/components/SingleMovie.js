import { useState } from 'react';
import { deleteDoc, updateDoc, doc } from 'firebase/firestore';

export const SingleMovie = ({ movie, db, getMovieList }) => {
    const [updatedTitle, setUpdatedTitle] = useState('');

    const onDeleteMovie = async (id) => {
        try {
            const movieDoc = doc(db, 'movies', id);
            await deleteDoc(movieDoc);
            getMovieList();
        } catch (error) {
            console.log(error);
        }
    };

    const onUpdateMovieTitle = async (id) => {
        try {
            const movieDoc = doc(db, 'movies', id);
            await updateDoc(movieDoc, { title: updatedTitle });
            getMovieList();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>{movie.title}</h1>
            <p> Date: {movie.releaseDate}</p>
            <button onClick={() => onDeleteMovie(movie.id)}> Delete Movie </button>
            <input placeholder='New Movie Title...'
                onChange={(e) => setUpdatedTitle(e.target.value)} />
            <button onClick={() => onUpdateMovieTitle(movie.id)}> Update Title </button>
        </div>


    );
}
