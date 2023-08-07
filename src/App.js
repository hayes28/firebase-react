import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';

function App() {
  const [movieList, setMovieList] = useState([]);

  const movieCollectionRef = new collection(db, 'movies');

  useEffect(() => {
    const getMovieList = async () => {
      // READ THE DATA
      // SET THE MOVIE LIST
      try {
        const data = await getDocs(movieCollectionRef);
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovieList(filterData);

      } catch (error) {
        console.log(error);
      }
    };
    getMovieList();
  }, []);
  return (<div className='App'>
    <Auth />
    <div>
      {movieList.map((movie) => (
        <div>
          <h1 style={{color: movie.receivedAnOscar ? "green" : "red"}}>{movie.title}</h1>
          <p> Date: {movie.releaseDate}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default App;
