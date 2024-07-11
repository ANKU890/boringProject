import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

function PageLoader() {
  return (
    <div className='middle'>
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
}

function PlayMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 1; // Set volume to full (1 is the maximum volume)
        audioRef.current.play().catch(error => {
          console.log("Autoplay failed:", error);
        });
      }
    };

    playAudio();
  }, []);

  return (
    <div>
      <img src="myImage.jpg" alt="Image" style={{ width: '100%', height: 'auto' }} />
      <audio ref={audioRef} loop>
        <source src="12.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

function DisplayApp() {
  const [playMusic, changePlayMusic] = useState(false);
  const [loadPage, changeLoadPage] = useState(false);

  function handleClick() {
    changeLoadPage(true);
    setTimeout(() => {
      changeLoadPage(false);
      changePlayMusic(true);
    }, 2000);
  }

  return (
    <div className='middle'>
      {loadPage && <PageLoader />}
      {!playMusic && !loadPage && (
        <div className="card">
          <div className="header">
            <p className='HTag'>L-ZEBRA</p>
          </div>
          <div className="info">
            <p className="title">Click the Continue Button To Start My Web App</p>
            <p>U Gonnna Experience Somthing That u Haven't Experienced Before !!</p>
          </div>
          <div className="footer">
            <p className="tag">Unknown Codder 👀</p>
            <button className='action' onClick={handleClick}>Continue</button>
          </div>
        </div>
      )}
      {playMusic && <PlayMusic />}
    </div>
  );
}

ReactDOM.render(<DisplayApp />, document.getElementById('root'));