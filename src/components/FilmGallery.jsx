import React, { Component } from "react";
import SingleFilm from "./SingleFilm";

const API_KEY = "e7363bdb";

class FilmGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            originalMovies: [],
        };
    }

    fetchData = async () => {
        try {
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
                    this.props.searchTerm || this.props.title
                )}`
            );
            const data = await response.json();

            if (data.Search) {
                this.setState({ movies: data.Search, originalMovies: data.Search });
            } else {
                console.error("Error fetching data:", data.Error);
                this.setState({ movies: [], originalMovies: [] });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchTerm !== this.props.searchTerm) {
            this.fetchData();
        }
    }

    render() {
        const { title, searchTerm } = this.props;
        const { movies } = this.state;

        return (
            <div>
                {searchTerm ? (
                    <h4>Risultati Ricerca</h4>
                ) : (
                    <h4>{title} Film Gallery</h4>
                )}
                {movies.length > 0 ? (
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
                        {movies.map((movie) => (
                            <SingleFilm
                                key={movie.imdbID}
                                title={movie.Title}
                                elementId={movie.imdbID}
                                poster={movie.Poster}
                            />
                        ))}
                    </div>
                ) : (
                    <p>Nessun risultato trovato</p>
                )}
            </div>
        );
    }
}

export default FilmGallery;