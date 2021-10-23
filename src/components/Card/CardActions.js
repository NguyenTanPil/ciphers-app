import Box from './Box';
import { Container, Title, Content } from './CardStyles';

const CardActions = ({ title, titleAlign }) => {
  return (
    <Container>
      <Title align={titleAlign}>{title}</Title>
      <Content>
        <Box />
      </Content>
    </Container>
  );
};

export default CardActions;
