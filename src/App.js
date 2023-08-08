import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { MovieForm } from './components/MovieForm';
import { MovieList } from './components/MovieList';

function App() {
  const [movieList, setMovieList] = useState([]);
  const movieCollectionRef = collection(db, 'movies');

  const fetchAndSetMovies = async () => {
    try {
      const data = await getDocs(movieCollectionRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filterData);
    } catch (error) {
      console.log(error);
      // Consider setting some error state here and displaying to the user.
    }
  };

  useEffect(() => {
    fetchAndSetMovies();
  }, []);

  return (
    <div className='App'>
      <Auth />
      <MovieForm movieCollectionRef={movieCollectionRef} getMovieList={fetchAndSetMovies} />
      <MovieList movieList={movieList} getMovieList={fetchAndSetMovies} />
    </div>
  );
}

export default App;

