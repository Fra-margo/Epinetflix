import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "e7363bdb";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  
  useEffect(() => {
    const fetchMovieDetails = async () => {
        try {
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
            );
            const data = await response.json();

            if (data.Response === "True") {
                setMovieDetails(data);
            } else {
                console.error("Error fetching movie details:", data.Error);
            }
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
        {movieDetails ? (
            <>
                <h2>{movieDetails.Title}</h2>
                <img src={movieDetails.Poster} alt={movieDetails.Title} />
                <p className="text-white">{movieDetails.Plot}</p>
            </>
        ) : (
            <p>Caricamento in corso...</p>
        )}
    </div>
);
};

export default MovieDetails;