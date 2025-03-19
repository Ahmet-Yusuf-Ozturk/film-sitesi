import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Film(props) {
  const [movie, setMovie] = useState();
  const { movies, clickHandler, kaldır } = props;
  const { id } = useParams();
  useEffect(() => {
    const foundMovie = movies.find((film) => film.id === parseInt(id));
    setMovie(foundMovie);
  }, [id, movies]);

  if (!movie) {
    return <div>Film bilgisi yükleniyor...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <p>Film ID: {id}</p>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <button onClick={() => clickHandler(movie)} className="save-button">
        Kaydet
      </button>
      <button onClick={() => kaldır(movie)}>
        Kaydedilenler Listesinden Kaldır
      </button>
    </div>
  );
}
