// react 
import React, {useState, useEffect} from 'react';
import useGetData from "../useGetData";

import Loading from './Loading'

// mui components
import { Container } from '@mui/material';

// mui icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const btnStyle = {
  position: 'absolute',
  height: '100%',
  border: 'none',
  zIndex: 1,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  width: '60px'
}

const MainBanner = () => {
  const data = useGetData("mainBunner");
  const [currentIndex, setCurrentIndex] = useState(0);

  const updatedImgs = data.data.map((img, idx) => ({
    ...img, 
    active: idx === currentIndex
  }))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % updatedImgs.length);
    }, 3000);
    
    return () => {
      clearInterval(timer);
    };
  }, [data]);

  const nextHandler = () => {
    setCurrentIndex((currentIndex + 1) % updatedImgs.length);
  }
  
  const prevHandler = () => {
    setCurrentIndex((currentIndex - 1 + updatedImgs.length) % updatedImgs.length);
  }

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <div className="carousel" style={{
        height: '400px',
        display: 'flex', 
        
        }}>
        <button 
          style={{
            ...btnStyle,
            backgroundImage: 'linear-gradient(90deg, #00000072, transparent)',
          }}
          onClick={prevHandler}
        ><ArrowBackIosIcon /></button>
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex', 
          }}
        >
          {updatedImgs.map((img) => (
            <div key={img.label} className={`swiper-slide`} style={{
              backgroundImage: `url(${img.imgPath})`, 
              backgroundRepeat: 'no-repeat',
              width: `${img.active ? '100%' : '0'}`, 
              height: '100%',
              position: 'relative',
              WebkitBackgroundSize: 'cover',
              transition: 'width 0.6s ease-out'
            }}></div>
          ))}
        </div>
        <button style={{
          ...btnStyle,
          right: 0,
          backgroundImage: 'linear-gradient(-90deg, #00000072, transparent)',
        }} 
          onClick={nextHandler}
        ><ArrowForwardIosIcon /></button>
      </div>
      <Container>
        <div 
        className="text" 
        style={{
          position: 'absolute', 
          top: '20%', 
          color: '#fff'
        }}
      >
        <h2 style={{fontSize: '50px', letterSpacing: '2px'}}>Your world of joy</h2>
        <p style={{fontSize: '25px', letterSpacing: '2px'}}>From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
      </div>
      </Container>
    </div>
  );
};

export default MainBanner;