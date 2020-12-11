import React, { useEffect, useState } from 'react'
import Video from './components/video';
import './style/index.scss';

function App() {
  const [data, setData] = useState({})
  const [video, setVideo] = useState(false)

  const getData = () => {
    fetch('data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((resp) => resp.json())
    .then((myJson) => setData(myJson));
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
        <Video src={video && video}/>
      </div>      
    </div>
  );
}

export default App;
