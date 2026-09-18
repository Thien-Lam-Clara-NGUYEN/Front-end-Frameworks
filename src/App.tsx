import { useState } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
// import { SAMPLE_MOVIES } from './data/movies';
import { SAMPLE_MOVIES } from './data/sampleMovies';

function App() {
  const [query, setQuery] = useState('');

  const filteredMovies = SAMPLE_MOVIES.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Movie Explorer</h1>
      <SearchBar query={query} onChange={setQuery} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;