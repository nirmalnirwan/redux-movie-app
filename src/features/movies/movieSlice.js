import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/APIs/movieApi';
import { APIKey } from '../../common/APIs/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async () => {
        const movieText = 'Harry';
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${movieText}&type=movie`
        );
        return response.data;
    });

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async () => {
        const movieText = 'Friends';
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${movieText}&type=series`
        );
        return response.data;
    });

export const fetchAsyncMoviesOrShowsDetails = createAsyncThunk(
    'movies/fetchAsyncMoviesOrShowsDetails',
    async (id) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);

        return response.data;
    });

const initialState = {
    movies: {},
    shows: {},
    moviesOrShowsDetail: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShow: (state) => {
            state.moviesOrShowsDetail = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fetched successfully");
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("fetched successfully");
            return { ...state, shows: payload }
        },
        [fetchAsyncMoviesOrShowsDetails.fulfilled]: (state, { payload }) => {
            console.log("fetched successfully");
            return { ...state, moviesOrShowsDetail: payload }
        }

    }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;

export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetail = (state) => state.movies.moviesOrShowsDetail;



export default movieSlice.reducer;