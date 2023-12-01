import { useState } from "react";
import { useEffect } from "react";
import { Navbar, Skeleton } from "../components";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("Avengers");
  const [isLoading, setIsLoading] = useState(false);
  const getMovies = async () => {
    setIsLoading(true);
    const response = await fetch(
      `http://www.omdbapi.com/?s=${title}&apikey=4049c5c6`
    );
    setIsLoading(false);
    const result = await response.json();
    console.log(result);
    setMovies(result.Search);
  };
  useEffect(() => {
    getMovies();
  }, [title]);
  console.log(movies);
  return (
    <div>
      <Navbar />
      <div className="bg-[url('/header.jpg')] bg-center flex flex-col items-center justify-center bg-cover h-[40vh]">
        <div className="text-3xl lg:text-6xl font-extrabold">
          Hello Movies Lovers!
        </div>
        <p className="my-5">The best place for watching the movies </p>
        <div className="flex  bg-gray-700 rounded">
          <input
            type="text"
            className="bg-transparent p-2"
            placeholder="title of movies"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={() => setTitle(input)}
            className="px-4 py-2 bg-purple-700 font-bold rounded"
          >
            Search Movies
          </button>
        </div>
      </div>
      <div className="flex py-4 px-6 lg:px-12 flex-wrap justify-between">
        {isLoading ? (
          <Skeleton />
        ) : movies ? (
          movies?.map((movie) => (
            <div className="w-[49%] lg:w-[24%] p-4 rounded my-4 bg-[#333]">
              <img
                className=" h-[100px] w-full mb-3 object-cover"
                src={`${movie.Poster}`}
                alt=""
              />
              <h2 className="font-bold ">{movie.Title}</h2>
              <p>{movie.Year}</p>
            </div>
          ))
        ) : (
          <div className="h-[40vh] flex flex-col w-full items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              class="bi bi-emoji-frown-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
            </svg>
            <p className=" text-2xl my-5">movies not found</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
