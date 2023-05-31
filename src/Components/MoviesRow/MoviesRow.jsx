import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Youtube from 'react-youtube';
import Image from "../Image/Image";
import search from "../../Imgs/search.png"

function MoviesRow() {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '9e0856ae02dd1e042f13b81f15fb6661';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

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
    if(results.length) {
      await fetchMovie(results[0].id)
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const selectMovie = async(movie) =>{
    fetchMovie(movie.id)
    setMovie(movie)
    window.scrollTo(0,0)
  }

  const fetchMovie = async(id) =>{
    const {data} = await axios.get(`${API_URL}/movie/${id}`, {
      params:{
        api_key: API_KEY,
        append_to_response: "videos"
      }
    })

    if(data.videos && data.videos.results){
      const trailer = data.videos.results.find((video) => video.name === "Official Trailer");
      setTrailer(trailer ? trailer : data.videos.results[0])
    }
    setMovie(data)
  }

  const searchMovies = (e) => {
    const value = e.target.value;
    setSearchKey(value);
  
    if (value === "") {
      console.log("No se encontró su película!");
      fetchMovies(); // Búsqueda sin parámetros para mostrar los resultados iniciales
    } else {
      fetchMovies(value);
    }
  }


  return (
    <div>
     <div className="bg-slate-300 flex justify-between">
  <form className="flex p-4" onSubmit={searchMovies}>
    <input className="rounded-md" type="text" placeholder="Search Movies" onChange={searchMovies}  />
    <Image src={search} className="h-8 p-1" />
  </form>
  <h2 className="text-3xl p-3 ">Trailer Movies</h2>
</div>
<div>
  <main>
    {movie ? (
      <div
        className="viewtrailer"
        style={{
          backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
        }}
      >
        {playing ? (
          <>
            <YouTube
              videoId={trailer.key}
              className="reproductor container"
              containerClassName="youtube-container amru"
              opts={{
                width: "100%",
                height: "100%",
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
              className="boton"
            >
              Close
            </button>
          </>
        ) : (
          <div className="container">
            <div className="">
              {trailer ? (
                <button
                  className="boton"
                  onClick={() => setPlaying(true)}
                  type="button"
                >
                  Play Trailer
                </button>
              ) : (
                "Sorry, no trailer available"
              )}
              <h1 className="text-white">{movie.title}</h1>
              <p className="text-white">{movie.overview}</p>
            </div>
          </div>
        )}
      </div>
    ) : null}
  </main>
</div>


    <div className="p-2 bg-gradient-to-t from-black to-transparent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-black">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
          <h4 className="flex justify-around text-center text-xl font-semibold text-gray-800 p-4"><span className=''>{movie.title} </span> <p className='text-orange-600'>⚔{movie.vote_average}</p> </h4>
          <img
            src={`${URL_IMAGE}${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-auto"
          />
          <div className="flex flex-col  p-2 w-full h-auto">
          <p className='p-1 text-sm pb-1'>{movie.overview}</p>
            <p className='  text-center text-sm  font-semibold text-orange-600'> {movie.release_date}</p>
            </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default MoviesRow;
