import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './MovieInfo.css'
const MovieInof = (props) => {

    let [responseData, setResponseData] = useState({});
    let [genreValue,setgenreValue] = useState();
    const genres = JSON.parse(localStorage.getItem('genres'))
    //console.log(genres)
    console.log(genres)
    let genre = {}
    for (let i=0; i<genres.length; i++){
        genre[genres[i]['id']]=genres[i]['Name']
    }
    

    console.log(genreValue)
  
  const { id } = useParams();
  useEffect(() => {
    axios({
      "method": "GET",
      "url": "http://localhost:8000/api/movie/id/"+id,
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }, "params": {
        "language_code": "en"
      }
    })
    .then((response) => {
      setResponseData(response.data)
      setgenreValue(response.data.genre)
      console.log(genreValue)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [id])

  const changeGenre = async (event) => {
      setgenreValue(event.target.value);
      let genreid=parseInt(event.target.value)
      let id = parseInt(responseData.id)
      const res = await axios.put("http://localhost:8000/api/movie/"+id, {
        "genre": genreid
    });
    
  }
  
  console.log(id);
    return (
        <div class="App"> 
            <div class="row m-2">
                <div class="col-5">Title </div>
                <div class="col-5">{responseData.Name}</div>
            </div>
            <div  class="row m-2">
                <div class="col-5">Rating</div>
                <div class="col-5">{responseData.Rating}</div>
            </div>
            <div  class="row m-2">
                <div class="col-5">Relase Year</div>
                <div class="col-5">{responseData.ReleaseYear}</div>
            </div>
            <div  class="row m-2">
                <div class="col-5">Genre</div>
                <select class="col-5" value={genreValue} onChange={changeGenre}>
                    {genres.map((data, id) => (
                        <option value={data.id}>{data.Name}</option>
                    )

                    ) }
                    </select>
            </div>
            
                  
        </div>
    )
}

export default MovieInof
