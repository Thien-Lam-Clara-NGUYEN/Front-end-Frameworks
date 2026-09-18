import { useState } from 'react';
import type { Movie } from '../types';
import { getPosterUrl } from '../data/sampleMovies';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <article className="movie-card" tabIndex={0} aria-label={movie.title}>
      <div className="poster-wrapper">
        <img
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
          className="poster-img"
          loading="lazy"
        />
        <div className="poster-overlay">
          <div className="card-top-badges">
            <span className="rating-badge">{movie.vote_average.toFixed(1)}</span>
            <button
              className="favorite-btn"
              onClick={() => setIsFavourite((prev) => !prev)}
              aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
            >
              {isFavourite ? '♥' : '♡'}
            </button>
          </div>
        </div>
      </div>
      <div className="movie-card-info">
        <h2 className="movie-card-title">{movie.title}</h2>
        <div className="movie-card-meta">
          <span>{movie.release_date?.slice(0, 4)}</span>
          <span>{movie.vote_count} votes</span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;