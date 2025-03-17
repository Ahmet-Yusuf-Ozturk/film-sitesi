import React, { useState } from 'react';
import { movies } from './sahteVeri.js';
import { Switch, Route } from 'react-router-dom';
import Film from './components/Film.jsx';
import FilmListesi from './components/FilmListesi.jsx';

import KaydedilenlerListesi from './components/KaydedilenlerListesi';

export default function App() {
  /* Görev: 1
  kaydedilmiş filmler ve film listesi için 2 tane state tanımlayın.
  film listesini sahteVeri'den alın.
  */
  const [filmler, setFilmler] = useState(movies);
  const [kaydedilmişFilmler, setKaydedilmişFilmler] = useState([]);

  const KaydedilenlerListesineEkle = (movie) => {
    /* Görev: 2
    kaydedilmiş film listesine eklemek için bir click handle fonksiyonu yazın.
    aynı filmi 2. kez eklememeli.
    Kaydet butonunun olduğu component'e prop olarak gönderin.
    */
    if (!kaydedilmişFilmler.find((film) => film.id === movie.id)) {
      setKaydedilmişFilmler([...kaydedilmişFilmler, movie]);
    }
  };

  return (
    <div>
      <KaydedilenlerListesi list={kaydedilmişFilmler} />
      <Switch>
        <Route exact path="/">
          <FilmListesi movies={filmler} />
        </Route>
        <Route path="/filmler/:id">
          <Film movies={filmler} onClick={KaydedilenlerListesineEkle} />
        </Route>
      </Switch>
    </div>
  );
}
