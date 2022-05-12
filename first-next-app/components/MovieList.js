import React from "react";
import movies from "../pages/api/movies.json";
import { useEffect } from "react";
function MovieList({ movies }) {
  console.log(movies);
  /* return (
    <div className="mt-10 flex flex-wrap place-content-evenly ">
     {movies.movie.map((data) => {

        return (
          <div
            key={data.id}
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div className=" ">
              <img
                className="mx-auto"
                src={data.imageURL}
                width={200}
                height={300}
              />
            </div>

            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.name}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data.overview}
              </p>
            </div>
            <div>
              <a class="inline-flex py-2 px-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                IMDB {data.rating}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
*/
  /*return (
    <div className="mt-10 flex flex-wrap place-content-evenly ">
      {movies.map((data) => {
        return (
          <div
            key={data.id}
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <div className=" ">
              <img
                className="mx-auto"
                src={data.imageURL}
                width={200}
                height={300}
              />
            </div>

            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.name}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data.overview}
              </p>
            </div>
            <div>
              <a class="inline-flex py-2 px-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                IMDB {data.rating}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
  */
}

export default MovieList;
