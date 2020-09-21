import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { FAQData } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero title={FAQData.title} image={FAQData.image} />
    <h3>{FAQData.subtitle1}</h3>
    <p>{FAQData.text1}</p>
    <h3>{FAQData.subtitle2}</h3>
    <p>{FAQData.text2}</p>
    <h3>{FAQData.subtitle3}</h3>
    <p>{FAQData.text3}</p>
  </Container>
);

export default FAQ;