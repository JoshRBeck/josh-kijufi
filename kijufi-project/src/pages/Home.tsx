import React from 'react';
import Chair from "../images/chair.png"
import Camera from "../images/camera.png"
import HeadingNeu from "../images/heading_neu.png"

const Home: React.FC = () => {
  return (
    <div>
      <div className="title-container">
        <h1 className='title'>Gemeinsam Grenzenlos</h1>
        <br></br>
        <p className="kinder-festival">Das Kinderrechte-Filmfestival 2023</p>
      </div>
      <div className="tiled-container">
        <div className="tile1">
          <img src={Chair} alt="chair" className="chair-image"></img>
        </div>
        <div className="tile2"></div>
        <div className="tile3">
          <img src={Camera} alt="camera-image"></img>
        </div>
        <div className="tile4"></div>
      </div>
      <img src={HeadingNeu} alt="New heading" className="heading-neu"></img>
    </div>
  );
};

export default Home;
