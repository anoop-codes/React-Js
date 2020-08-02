import React from 'react';
import PropTypes from 'prop-types';
import Liked from '../common/Liked';

const Movies = ({ movies, onRemoveMovie, isLiked, onSort, sortColunm }) => {

    const getIcone = (column) => {
        if (column !== sortColunm.path) return null;
        if (sortColunm.order === 'asc')
            return <i class="fa fa-sort-asc"></i>
        else
            return <i class="fa fa-sort-desc"></i>
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
                            <td>{movie.title}</td>
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

Movies.prototype = {
    movies: PropTypes.array.isRequired,
    onRemoveMovie: PropTypes.func.isRequired
}

export default Movies;