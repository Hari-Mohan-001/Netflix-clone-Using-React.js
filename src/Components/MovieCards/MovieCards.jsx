import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { imageUrl,APIKEY } from "../../Constants/Constants";
import "./MovieCards.css";
import YouTube from 'react-youtube';

const MovieCards = (props) => {
  const [movies, setMovies] = useState([]);
  const [urlKey, setUrlKey] = useState('');

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovies(response.data.results);
      });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }

  const handleClick = (id)=>{
      axios.get(`movie/${id}/videos?api_key=${APIKEY}&language=en-US`)
      .then((response)=>{
        console.log(response.data.results);
        if(response.data.results.length >0){
          setUrlKey(response.data.results[0])
        }else{
          console.log('empty array');
        }
       

      })
  }

  return (
    <div className="cards_row">
      <h3>{props.title}</h3>
      <div className="cards">
        {movies.map((movie,index) => (
          <img onClick={()=> handleClick(movie.id)} key={index}
            className={props.isSmall ? 'small' : "card"}
            src={`${imageUrl+movie.backdrop_path}`}alt="Movie"/>
        ))}
      </div>
     { urlKey && <YouTube videoId={urlKey.key} opts={opts}/> }
    </div>
  );
};

export default MovieCards;
