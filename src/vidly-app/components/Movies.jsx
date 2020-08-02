import React from 'react';
import PropTypes from 'prop-types';
import Liked from '../common/Liked';

const Movies = ({ movies, onRemoveMovie, isLiked }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
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
        </table>);
}

Movies.prototype = {
    movies: PropTypes.array.isRequired,
    onRemoveMovie: PropTypes.func.isRequired
}

export default Movies;