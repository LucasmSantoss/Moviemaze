import React from "react";
import { NavLink as Anchor } from "react-router-dom";

function Index() {
    return (
        <div className="p-2 bg-slate-800 w-screen h-screen flex flex-col items-center">
          <div className="flex p-2 text-white">
            <h1 className="text-9xl p-5 font-bold underline">Welcome to MovieMaze</h1>
          </div>
          <div className="flex justify-around items-center p-5 text-white">
            <p className="w-2/4 text-2xl text-center mr-3">
              "MovieMaze" is a website created by Lucas Matias Santos that allows you
              to discover and explore a wide selection of movies from around the
              world. Using The Movie Database (TMDb) API, the website offers a variety
              of cinematic content, from acclaimed classics to the latest releases.
              In "MovieMaze", you can search for movies by title, genre, or release
              year, and get detailed information about each movie, including its
              synopsis, cast, average rating, release date, duration, and more. You
              can also watch the official trailer for each movie and read reviews from
              users who have watched and enjoyed them. The website also provides
              interactive features such as marking movies as favorites, creating
              personalized playlists, and sharing recommendations with your friends
              through social media. With a modern and appealing design, "MovieMaze"
              provides a complete and satisfying cinematic experience for movie
              lovers. Whether you're looking for a movie for a cozy night at home or
              want to stay updated with the latest releases, this website offers
              everything you need to explore and enjoy the exciting world of cinema.
              Explore, discover, and enjoy the best movies on "MovieMaze"!
            </p>
            <button className="flex p-5 h-24 items-center bg-black text-white hover:bg-white hover:text-black rounded-full transition-colors duration-300 ease-in-out mt-4">
             <Anchor to="/movies">Ver Catálogo de Películas</Anchor> 
            </button>
          </div>
        </div>
      );
      
      
      
}

export default Index;
