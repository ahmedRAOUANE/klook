import { Typography } from '@mui/joy'
import React from 'react'
import { Link } from 'react-router-dom'

const RecommendCard = () => {
  return (
    <Link style={{
        width: "100%",
        boxShadow: "0 0 1px 1px #d1d1d1",
        height: "54px",
        borderRadius: "10px",
        marginTop: "10px",
        display: 'flex',
    }}>
      
      <div>
        <div style={{width: "54px", height: "54px", backgroundColor: "gray", borderRadius: "10px", marginRight: "10px"}}></div>
      </div>
      <div style={{width: "74%"}}>
        <Typography component={'h4'} variant='h5' >title</Typography>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Typography>description</Typography>
          <Typography color='danger'>price</Typography>
        </div>
      </div>
    </Link>
  )
}

export default RecommendCard
