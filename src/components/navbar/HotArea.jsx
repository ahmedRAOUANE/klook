import { CardContent, Typography } from '@mui/joy'
import React from 'react';
import RecommendCard from './RecommendCard';
import { Box } from '@mui/material';



const HotArea = () => {
  return (
    <Box sx={{
      backgroundImage: "url(https://res.klook.com/image/upload/v1639474405/osl4fpo0fblk5tgsgfmd.png)",
      backgroundRepeat: "no-repeat",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0 0 1px 1px #d1d1d1",
    }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography> 
      <RecommendCard />
      <RecommendCard />
      <RecommendCard />
      <RecommendCard />
      <RecommendCard />
      <RecommendCard />
    </Box>
  )
}

export default HotArea
