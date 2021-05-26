
import axios from 'axios';
import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import './HomeScreen.css'
const HomeScreen = () => {
    let [responseData, setResponseData] = useState([]);
    let [movieData, setMovieData]  = useState([]);
    const history = useHistory();

const check = ( id )=> {
    axios({
        "method": "GET",
        "url": "http://localhost:8000/api/movie/"+id,
        "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "quotes15.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }, "params": {
          "language_code": "en"
        }
      })
      .then((response) => {
        setMovieData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

}

const handleMovie = (id) => {
  history.push('movie/'+id)
}

useEffect(() => {
        axios({
          "method": "GET",
          "url": "http://localhost:8000/api/genre",
          "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
          }, "params": {
            "language_code": "en"
          }
        })
        .then((response) => {
          localStorage.setItem('genres', JSON.stringify(response.data))
          let f = localStorage.getItem('genres')
          console.log(f)
          setResponseData(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      }, [])




    return (
    <div className="screen">
     <div className="genres">
        { responseData && responseData.map((data, id) => (
          <div key={id} className="genre">
            <div class="genre-text" onClick={()=>check(data.id)}>{data.Name}</div>
          </div>
        ))}
    </div>

        <div className="movies">
        {movieData && movieData.map((data, id)=>(
            <div key={id} className="movie">
                <div class="card" onClick={()=>handleMovie(data.id)}>
                  <div class="title">  {data.Name} </div>
                    </div>
            </div>
        ))}
        </div>
    </div>
    )
}

export default HomeScreen
