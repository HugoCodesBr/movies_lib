import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

import './MoviesGrid.css';

const moviesURl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMoveis] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMoveis(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURl}top_rated?${apiKey}&language=pt-BR`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 ? (
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
