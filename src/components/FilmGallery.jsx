import { useState, useEffect } from "react";
import SingleFilm from "./SingleFilm";

const API_KEY = "e7363bdb";

const FilmGallery = (props) => {
    const [movies, setMovies] = useState([]);
    const [originalMovies, setOriginalMovies] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
                    props.searchTerm || props.title
                )}`
            );
            const data = await response.json();

            if (data.Search) {
                setMovies(data.Search);
                setOriginalMovies(data.Search);
            } else {
                console.error("Error fetching data:", data.Error);
                setMovies([]);
                setOriginalMovies([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [props.searchTerm, props.title]);

    return (
        <div>
            {props.searchTerm ? (
                <h4>Risultati Ricerca</h4>
            ) : (
                <h4>{props.title} Film Gallery</h4>
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

export default FilmGallery;