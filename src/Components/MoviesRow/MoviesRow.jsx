import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import Image from "../Image/Image";
import search from "../../Imgs/search.png";

function MoviesRow() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "4f5f43495afcc67e9553f6c684a82f84";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  // endpoint para las imagenes
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);
  const [favoritos, setFavoritos] = useState([]);

  // funcion para realizar la peticion get a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results);
    setMovie(results[0]);

    if (results.length) {
      await fetchMovie(results[0].id);
    }
  };

  // funcion para la peticion de un solo objeto y mostrar en reproductor de videos
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }

    setMovie(data);
  };

  const selectMovie = async (movie) => {
    fetchMovie(movie.id);
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  const searchMovies = (e) => {
    const value = e.target.value;
    setSearchKey(value);

    if (value === "") {
      console.log("No se encontró su película!");
      fetchMovies();
    } else {
      fetchMovies(value);
    }
  };

  const agregarFavorito = (movie) => {
    setFavoritos([...favoritos, movie]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="bg-slate-300 flex justify-between">
        <form className="flex p-4" onSubmit={searchMovies}>
          <input
            className="rounded-md"
            type="text"
            placeholder="Search Movies"
            onChange={searchMovies}
          />
          <Image src={search} className="h-8 p-1" />
        </form>
        <h2 className="text-3xl p-3 ">Trailer Movies</h2>
      </div>

      <div className="flex justify-center items-center bg-black p-5 ">
        <main>
          {movie ? (
            <div
              className="bg-cover bg-center h-screen flex flex-col justify-center items-center object-contain"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="mx-auto p-4"
                    containerClassName="youtube-container"
                    opts={{
                      width: "1000px",
                      height: "500px",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button
                    onClick={() => setPlaying(false)}
                    className="bg-white text-gray-800 px-4 py-2 rounded-lg"
                  >
                    Close
                  </button>
                </>
              ) : (
                <div className="mx-auto mb-20 text-center">
                  {trailer ? (
                    <button
                      className="bg-orange-500 text-white px-8 py-2 rounded-lg mb-4"
                      onClick={() => setPlaying(true)}
                      type="button"
                    >
                      Play Trailer
                    </button>
                  ) : (
                    <p className="text-white mb-4">Sorry, no trailer available</p>
                  )}
                  <h1 className="text-white text-3xl font-bold mb-4">
                    {movie.title}
                  </h1>
                  <p
                    className="text-white text-lg"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1.5)" }}
                  >
                    {movie.overview}
                  </p>
                  <button
                    onClick={() => agregarFavorito(movie)}
                    className={`bg-orange-500 text-white px-4 py-2 rounded-lg ${
                      favoritos.includes(movie) ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={favoritos.includes(movie)}
                  >
                    {favoritos.includes(movie) ? "Agregado a favoritos" : "Agregar a favoritos"}
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>

      <div className="p-2 bg-gradient-to-t from-black to-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-black">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => {
              document.body.style.cursor = "pointer";
            }}
            onMouseLeave={() => {
              document.body.style.cursor = "auto";
            }}
            onClick={() => selectMovie(movie)}
          >
            <h4 className="flex justify-around text-center text-lg font-semibold text-gray-800 p-2">
              <span>{movie.title}</span>
              <p className="text-orange-600">⚔{movie.vote_average}</p>
            </h4>
            <div className="flex items-center justify-center">
              <img
                src={`${URL_IMAGE}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "400px" }}
              />
            </div>
            <div className="flex flex-col p-2">
              <p className="text-center text-sm font-semibold text-orange-600">
                {movie.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesRow;
