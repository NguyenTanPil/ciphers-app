import React from 'react';
import CardActions from '../Card/CardActions';
import CardInput from '../Card/CardInput';
import CardOutput from '../Card/CardOutput';
import { Container, Wrap } from './HomeStyles';

const Home = () => {
  return (
    <Container>
      <Wrap>
        <CardInput title="Text Input" />
        <CardActions title="Cipher Name" titleAlign="center" />
        <CardOutput title="Text Output" />
      </Wrap>
    </Container>
  );
};

export default Home;
