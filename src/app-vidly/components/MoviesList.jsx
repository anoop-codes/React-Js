import React from 'react';
import PropTypes from 'prop-types';
import Liked from '../common/Liked';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, onRemoveMovie, isLiked, onSort, sortColunm }) => {

    const getIcone = (column) => {
        if (column !== sortColunm.path) return null;
        if (sortColunm.order === 'asc')
            return <i className="fa fa-sort-asc"></i>
        else
            return <i className="fa fa-sort-desc"></i>
    }

    return (
        <div className="table-responsive">
            <table className="table table-striped respon">
                <thead>
                    <tr>
                        <th scope="col" onClick={() => onSort('title')}>
                            Title {getIcone('title')}
                        </th>
                        <th scope="col" onClick={() => onSort('genre.name')}>
                            Genre {getIcone('genre.name')}
                        </th>
                        <th scope="col" onClick={() => onSort('numberInStock')}>
                            Stock {getIcone('numberInStock')}
                        </th>
                        <th scope="col" onClick={() => onSort('dailyRentalRate')}>
                            Rate {getIcone('dailyRentalRate')}
                        </th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie._id}>
                            <td>
                                <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
                            </td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Liked
                                    liked={movie.liked}
                                    isLiked={() => isLiked(movie)}
                                />
                            </td>
                            <td>
                                <button className="btn btn-sm btn-danger" onClick={() => onRemoveMovie(movie)}>remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

MoviesList.prototype = {
    movies: PropTypes.array.isRequired,
    onRemoveMovie: PropTypes.func.isRequired
}

export default MoviesList;