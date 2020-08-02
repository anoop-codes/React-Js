import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';
import Movies from './components/Movies';
import SideBar from './common/SideBar';
import { getGenres } from './services/fakeGenreService';

class HomeVidlyApp extends Component {
    state = {
        movies: [],
        genres: [],
        selectedGenre: { _id: 0, name: 'All Genre' }
    }

    componentDidMount() {
        this.setState({
            movies: getMovies(),
            genres: [{ _id: 0, name: 'All Genre' }, ...getGenres()]
        })
    }


    handleMovieRemove = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({
            movies
        });
    }

    handleLiked = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);

        movies[index].liked = !movie.liked;

        this.setState({
            movies
        })
    }

    handleSelectedGenre = (genre) => {
        this.setState({
            selectedGenre: genre
        })
    }

    render() {
        const { movies, genres, selectedGenre } = this.state;
        const filteredMovie = selectedGenre._id !== 0 ? movies.filter(m => m.genre.name === selectedGenre.name) : movies;
        return (
            <>
                <div className="row">
                    <div className="col-md-3 my-5">
                        <SideBar
                            genres={genres}
                            selectedGenre={selectedGenre}
                            selectGenre={this.handleSelectedGenre}
                        />
                    </div>
                    <div className="col-md-9">
                        <div className="my-3">there are <strong> {filteredMovie.length}</strong> in the database</div>
                        {movies.length !== 0 ?
                            <Movies
                                movies={filteredMovie}
                                onRemoveMovie={this.handleMovieRemove}
                                isLiked={this.handleLiked}
                            /> :
                            <h1>No more movie ......</h1>
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default HomeVidlyApp;