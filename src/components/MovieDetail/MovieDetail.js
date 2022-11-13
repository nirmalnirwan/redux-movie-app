import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMoviesOrShowsDetails, getMovieOrShowDetail ,removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import './MovieDetail.scss'


const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getMovieOrShowDetail);
    console.log(data);
    useEffect(() => {
        dispatch(fetchAsyncMoviesOrShowsDetails(imdbID));
        
        return()=>{
            dispatch(removeSelectedMovieOrShow());
        }

    }, [dispatch, imdbID]);
    return (
        <div className='movie-section'>
            <div className='section-left'>
                <div className='movie-title'>{data.Title}</div>
                <div className='movie-rating'>
                    <span>
                        IMDB Rating <i className='fa fa-star'>: {data.imdbRating}</i>
                    </span>
                    <span>
                        IMDB Voters <i className='fa fa-thumbs-up'>: {data.imdbVoters}</i>
                    </span> <span>
                        Runtime <i className='fa fa-film'>: {data.Runtime}</i>
                    </span> <span>
                        Year <i className='fa fa-calender'>: {data.Year}</i>
                    </span>
                </div>
                <div className='movie-plot'>{data.Plot}</div>
                <div className='movie-info'>
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Stars</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Generes</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div>
                        <span>Language</span>
                        <span>{data.Langyage}</span>
                    </div>
                    <div>
                        <span>Awards</span>
                        <span>{data.Awards}</span>
                    </div>
                </div>

            </div>
            <div className='section-right'>
                <img src={data.Poster} alt={data.Title}></img>
            </div>
        </div>
    );
};

export default MovieDetail;