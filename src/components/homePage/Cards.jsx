import React from 'react';

import { Link } from "react-router-dom";

// mui components
import {
  CardContent,
  CardMedia,
  Card,
  Typography,
  Rating,
} from "@mui/material";

const cardContent = (cardInfo) => (
  <>
    <CardMedia
      component="img"
      height="140"
      image={cardInfo.img}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="small">
        {cardInfo.subTxt}
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
        {cardInfo.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {cardInfo.desc}
      </Typography>

      {cardInfo.rate !== undefined ? (
        <div>
          <Rating name="read-only" value={cardInfo.rate.stars} readOnly />
        </div>
      ): ""}
    </CardContent>
  </>
)

const Cards = ({ cardInfo, lnk }) => {
  return (
    <Card sx={{ borderRadius: "20px", margin: "auto" }}>
      {lnk ? (
        <Link to={`/${lnk}/${cardInfo.id}`} style={{color: 'black', width: "100%"}}>
          {cardContent(cardInfo)}
        </Link>
      ) : cardContent(cardInfo)}
    </Card>
  )
}

export default Cards