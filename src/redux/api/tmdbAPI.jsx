import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
let apikey = import.meta.env.VITE_API_KEY;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // endPoint se puede llamara con cualquier nomre, pero se pone uno mas general para que haga sentido al momento de usar el end point.
    getMovies: builder.query({
      query: (props) =>
        `/movie/${props.filter}?api_key=${apikey}&language=en-US&page=${props.page}&region=MX`,
    }),
    getLatestMovies: builder.query({
      query: (props) =>
        `/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&page=${props.page}&primary_release_date.gte=${props.startDate}&primary_release_date.lte=${props.endDate}&with_watch_monetization_types=flatrate`,
    }),
    getGenres: builder.query({
      query: () =>
        `/genre/movie/list?api_key=${apikey}&language=en-US`,
    }),
    getDetail: builder.query({
      query: (movie_id) => `/movie/${movie_id}?api_key=${apikey}&language=en-US`
    })
  }),
});

export const { useGetMoviesQuery, useGetLatestMoviesQuery, useGetGenresQuery, useGetDetailQuery } =
  tmdbApi;
