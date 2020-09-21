import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { InfoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero title={InfoData.title} image={InfoData.image} />
    <p>{InfoData.text}</p>
  </Container>
);

export default Info;