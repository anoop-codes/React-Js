import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';
import Movies from './components/Movies';
import SideBar from './common/SideBar';
import { getGenres } from './services/fakeGenreService';
import Pagination from './common/Pagination';
import { paginate } from './utiles/paginate';
import _ from 'lodash';

class HomeVidlyApp extends Component {
    state = {
        movies: [],
        genres: [],
        selectedGenre: { _id: 0, name: 'All Genre' },
        pageSize: 4,
        currentPage: 1,
        sortColunm: { path: 'title', order: 'asc' }
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


    handlePageChange = (page) => {
        this.setState({
            currentPage: page
        })
    }

    handleSort = (path) => {

        const sortColunm = { ...this.state.sortColunm };

        sortColunm.path = path;
        sortColunm.order = sortColunm.order === 'asc' ? 'desc' : 'asc';

        this.setState({
            sortColunm
        })
    }


    render() {
        const { movies, genres, selectedGenre, pageSize, currentPage, sortColunm } = this.state;


        const filteredMovie = selectedGenre._id !== 0 ? movies.filter(m => m.genre.name === selectedGenre.name) : movies;

        const sortedMovies = _.orderBy(filteredMovie, [sortColunm.path], [sortColunm.order]);

        const allMovies = paginate(sortedMovies, currentPage, pageSize);

        return (
            <>
                <div className="row">
                    <div className="col-md-3 my-5">
                        <SideBar
                            items={genres}
                            seletedItems={selectedGenre}
                            onChangeItem={this.handleSelectedGenre}
                        />
                    </div>
                    <div className="col-md-9">
                        <div className="my-3">there are <strong> {filteredMovie.length}</strong> in the database</div>
                        {movies.length !== 0 ?
                            <Movies
                                movies={allMovies}
                                onRemoveMovie={this.handleMovieRemove}
                                isLiked={this.handleLiked}
                                onSort={this.handleSort}
                                sortColunm={sortColunm}
                            /> :
                            <h1>No more movie ......</h1>
                        }
                        <Pagination
                            itemsCount={filteredMovie.length}
                            pageSize={pageSize}
                            onPageChange={this.handlePageChange}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default HomeVidlyApp;