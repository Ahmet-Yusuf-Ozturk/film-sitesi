import React, { useState } from 'react';
import Film from './components/Film.jsx';
import FilmListesi from './components/FilmListesi.jsx';
import { Link, Route } from 'react-router-dom';
import { movies } from './sahteVeri.js';
import KaydedilenlerListesi from './components/KaydedilenlerListesi';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min.js';

export default function App() {
  const [filmListesi, setFilmListesi] = useState(movies);
  const [savedMovies, setSavedMovies] = useState([]);

  const KaydedilenlerListesineEkle = (movie) => {
    if (!savedMovies.find((film) => film.id === movie.id)) {
      setSavedMovies([...savedMovies, movie]);
    }
  };

  const KaydedilenlerListesindenKaldır = (movie) => {
    if (savedMovies.find((film) => film.id === movie.id)) {
      const filteredList = savedMovies.filter((film) => film.id !== movie.id);
      setSavedMovies(filteredList);
    }
  };

  return (
    <div>
      <KaydedilenlerListesi list={savedMovies} />
      <Switch>
        <Route exact path="/">
          <FilmListesi movies={filmListesi} />
        </Route>
        <Route path="/filmler/:id">
          <Film
            movies={filmListesi}
            clickHandler={KaydedilenlerListesineEkle}
            kaldır={KaydedilenlerListesindenKaldır}
          />
        </Route>
      </Switch>
    </div>
  );
}
