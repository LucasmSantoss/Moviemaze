import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';
import Image from "../Image/Image";

function MoviesRow() {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '9e0856ae02dd1e042f13b81f15fb6661';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    try {
      const response = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      });
      const { data: { results } } = response;
      setMovies(results);
      setMovie(results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="p-2 bg-slate-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-black">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
          <h4 className="flex justify-around text-center text-xl font-semibold text-gray-800 p-4">{movie.title} <p>⚔{movie.vote_average}</p> </h4>
          <img
            src={`${URL_IMAGE}${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto"
          />
          <div className="flex flex-col  p-2 w-full h-auto">
          <p className='p-1 text-sm pb-1'>{movie.overview}</p>
            <p className='  text-center text-sm  font-semibold'> {movie.release_date}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default MoviesRow;
