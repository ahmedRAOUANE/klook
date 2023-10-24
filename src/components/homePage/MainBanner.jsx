// react 
import React, {useState, useEffect} from 'react';

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

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1670577678/banner/tvhfgpkiapfldzoaj8ll.webp',
  },
  {
    label: 'Bird',
    imgPath:
      'https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1670577664/banner/rtw7fgqatgoc1vpcpamb.webp',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1670577678/banner/tvhfgpkiapfldzoaj8ll.webp',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1670577664/banner/rtw7fgqatgoc1vpcpamb.webp',
  },
];

const MainBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const updatedImgs = images.map((img, idx) => ({
    ...img, 
    active: idx === currentIndex
  }))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  const nextHandler = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }
  
  const prevHandler = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  return (
    <div style={{width: '100%'}}>
      <div className="carousel" style={{
        height: '400px',
        display: 'flex', 
        position: 'relative'
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
          top: '35%', 
          color: '#fff',
          zIndex: 2
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