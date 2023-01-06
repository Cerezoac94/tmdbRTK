import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
let apikey = import.meta.env.VITE_API_KEY

export const tmdbApi = createApi({
  reducerPath:"tmdbApi",
  baseQuery:fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    // endPoint se puede llamara con cualquier nomre, pero se pone uno mas general para que haga sentido al momento de usar el end point.
    getMovies: builder.query({
      query: (props) => `/movie/${props.filter}?api_key=${apikey}&language=en-US&page=${props.page}&region=MX`,
    }),
  })
})

export const {useGetMoviesQuery} = tmdbApi