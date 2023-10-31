import React from 'react';
import { useParams } from 'react-router-dom';

// components
import GetData from "../components/GetData";

// mui components
import { Container } from '@mui/material'

const Activity = () => {
  const { id } = useParams();
  const data = GetData(`activities/${id}`);

  console.log(data);

  return (
    <Container>
      <h1>{data.title}</h1>
    </Container>
  )
}

export default Activity