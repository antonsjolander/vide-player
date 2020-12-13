import React, { useEffect, useState } from 'react'
import Video from './components/video';
import Posters from './components/posters' 
import './style/index.scss';

function App() {
  const [data, setData] = useState([])
  const [video, setVideo] = useState(false)
  const [error, setError] = useState(false);

  const getData = () => {
    fetch('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((resp) => resp.json())
    .then((myJson) => setData(myJson))
    .catch((error) => {
      setError(true)
      console.error(error);
    })
  }

  useEffect(() => {
    getData();
  })

  const videoHandler = (src) => {
    setVideo(src);
  }

  return (
    <div className="App">
      <div className="container">
        <Video src={video && video} playing/>
        <Posters playVideo={videoHandler} data={data} />
      </div>      
    </div>
  );
}

export default App;
