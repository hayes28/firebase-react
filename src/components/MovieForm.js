import { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { auth } from '../config/firebase';

export const MovieForm = ({ movieCollectionRef, getMovieList }) => {
    const [newMovieTitle, setNewMovieTitle] = useState('');
    const [newMovieReleaseDate, setNewMovieReleaseDate] = useState(0);
    const [newMovieReceivedAnOscar, setNewMovieReceivedAnOscar] = useState(false);

    const onSubmitMovie = async () => {
        try {
            await addDoc(movieCollectionRef, {
                title: newMovieTitle,
                releaseDate: newMovieReleaseDate,
                receivedAnOscar: newMovieReceivedAnOscar,
                userId: auth?.currentUser?.uid,
            });
            getMovieList();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <input
                placeholder='Movie Title...'
                onChange={(e) => setNewMovieTitle(e.target.value)}
            />
            <input
                placeholder='Release Date...'
                type='number'
                onChange={(e) => setNewMovieReleaseDate(Number(e.target.value))}
            />
            <input
                type='checkbox'
                checked={newMovieReceivedAnOscar}
                onChange={(e) => setNewMovieReceivedAnOscar(e.target.checked)}
            />
            <label>Received an Oscar</label>
            <button onClick={onSubmitMovie}> Submit Movie </button>
        </div>

    );
}
