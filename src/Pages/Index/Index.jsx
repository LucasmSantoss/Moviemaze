import React from "react";
import { NavLink as Anchor } from "react-router-dom";


function Index() {
  return (
    <div
      className="p-2 bg-gradient-to-t  from-black to-transparent  w-screen h-screen flex flex-col items-center"
      
    >
      <div className="flex p-2 ">
        <h1 className="text-9xl p-5 font-bold shadow-lg ">
          Welcome to MovieMaze 📽
        </h1>
      </div>
      <div className="flex justify-around items-center p-5 ">
        <p className="w-2/4 text-2xl text-center mr-3 p-4">
          "MovieMaze" is a website created by Lucas Matias Santos and Karen Perez that allows you
          to discover and explore a wide selection of movies from around the
          world. Using The Movie Database <a className="text-orange-600" href="https://www.themoviedb.org/?language=es">(TMDb) </a>API, the website offers a variety
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
        <Anchor to="/movies"><button className="flex p-5 h-24 items-center bg-black text-white hover:bg-white hover:text-black rounded-full transition-colors duration-300 ease-in-out mt-4">
        See movies in premiere
        </button></Anchor>
      </div>
    </div>
  );
}

export default Index;
