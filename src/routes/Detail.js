import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";

function Detail() {
    
    const [loading, setLoading] = useState(true);    
    const [movie, setMovie] = useState();
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            console.log(json);
            setMovie(json.data.movie);
            setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, [id]);
    console.log(movie);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : ( 
            <div>
                {movie && (
                    <Movie 
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image} 
                        title={movie.title} 
                        description_intro={movie.description_intro}
                        genres={movie.genres}
                    />
                )}
            </div>
            )}
        </div>
    );
}

export default Detail;