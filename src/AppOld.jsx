import './App.css'
import MovieCard from './components/MovieCard';

function AppOld() {

  const movieNumber = 1;

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Terminator", release_date: "2025", url: "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_FMjpg_UX1066_.jpg" }} />
      ) : (
        <MovieCard movie={{ title: "Terminator 2", release_date: "2025", url: "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_FMjpg_UX1066_.jpg" }} />
      )}

      {movieNumber === 1 && <MovieCard movie={{ title: "Terminator 3", release_date: "2025", url: "https://m.media-amazon.com/images/M/MV5BZmE0YzIxM2QtMGNlMi00MjRmLWE3MWMtOWQzMGVjMmU0YTFmXkEyXkFqcGc@._V1_FMjpg_UX1066_.jpg" }} />}
    </>
  )
}

function Text({ textstr }) {
  return (
    <div><p>HELLO WORLD FROM TEXT {textstr}</p></div>
  );
}

export default AppOld;
