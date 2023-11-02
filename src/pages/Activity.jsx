import React from 'react';
import { useParams } from 'react-router-dom';

// components
import useGetData from "../components/useGetData";

// mui components
import { Container } from '@mui/material'

const Activity = () => {
  const { id } = useParams();
  const data = useGetData(`activities/${id}`);

  return (
    <Container>
      <h1>{data.data.title}</h1>
    </Container>
  )
}

export default Activity