import React, {useState} from 'react';
import { useTheme, Box, Typography, Button, Container } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

import HeroSlider, {Slide} from 'hero-slider';
import Background from 'hero-slider/dist/components/Slide/Background';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const MainBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  setTimeout(() => {
    nextImage();
  }, 2000)

  return (
    <Box>
      {/* <HeroSlider
        slidingAnimation='left_to_right'
        orientation='horizontal'
        initialSlide={1}
        onBeforeChane={(prevImage, nextImage) => console.log('onbeforechange', prevImage, nextImage)}
        onChane={(nextImage) => console.log('onchange', nextImage)}
        onAfterChane={(nextImage) => console.log('onAfterchange', nextImage)}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoPlay: true,
          shouldDisplayButtons: true,
          autoPlayDuration: 5000,
          height: '70vh',
          width: '100%'
        }}
        style={{
          height: '70vh'
        }}
      >
        {images.map((slide) => (
          <Slide 
            Background={{BackgroundImage:`url(${slide.imgPath})`}}
          />
        ))}
      </HeroSlider> */}
      {/* <Container sx={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: '3', color: '#fff'}}>
        <Typography variant='h2' component={'h3'}>Your world of joy</Typography>
        <Typography variant='h5' component={'p'}>From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</Typography>
      </Container>
      <Box style={{position: 'absolute', left: '0', width:'100%', height:'70vh'}}>
        <div style={{display: 'flex', overflow: 'scroll', height: '100%', width: '100%', position: 'relative'}}>
            <div style={{width: '100%', position: 'absolute'}}>
              <img style={{width: '100%', maxHeight: '100%'}} src={images[currentImageIndex].imgPath} />
            </div>
        </div>
        <div style={{
          position: 'absolute', 
          width: '100%', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          zIndex: '3', display: 'flex', 
          justifyContent: 'space-between',
          height: '100%'
          }}
        >
          <Button style={{
              height: '100%',
              backgroundImage: 'linear-gradient(90deg, #000000a1, transparent)',
              color: '#fff'
            }}
            onClick={prevImage}
          >
            <KeyboardArrowLeft />
          </Button>
          <Button style={{
              height: '100%',
              backgroundImage: 'linear-gradient(-90deg, #000000a1, transparent)',
              color: '#fff'
            }}
            onClick={nextImage}
          >
            <KeyboardArrowRight />
          </Button>
        </div>
      </Box> */}
    </Box>
  );
}

export default MainBanner;