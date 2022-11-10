import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/APIs/movieApi';
import { APIKey } from '../../common/APIs/movieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const movieText = 'Harry';
        const fetchMovies = async () => {
            const response = await movieApi.get(
                `?apiKey=${APIKey}&s=${movieText}&type=movie`
            ).catch((e) => {
                console.log("Error ", e);
            });
            dispatch(addMovies(response.data));
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <div className='banner-img'>
            </div>
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;