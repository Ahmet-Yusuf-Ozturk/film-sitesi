import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function FilmDetayları(props) {
  const { id, title, director, metascore } = props.movie;

  return (
    <Link to={`/filmler/${id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}
