import { create } from "zustand"
import { devtools, persist } from 'zustand/middleware'

const movieStore = (set) => ({
  movies: [],
  addMovie: (movie) => {
    set((state) => ({
      movies: [movie, ...state.movies]
    }))
  },
  removeMovie: (movieId) => {
    set((state) => ({
      movies: state.movies.filter((mov) => mov.id !== movieId)
    }))
  },
  watchedMovie: (movieId) => {
    set((state) => ({
      movies: state.movies.map((mov) => mov.id === movieId ? { ...mov, watched: !mov.watched } : mov)
    }))
  }
})

const useMovieStore = create(
  devtools(
    persist(movieStore, {
      name: "movies"
    })
  ))

export default useMovieStore