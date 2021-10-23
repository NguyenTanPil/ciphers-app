import { Container, Content, OutputText, Title } from './CardStyles';
import { useSelector } from 'react-redux';
import { selectTransform } from '../../feature/transform/transformSlice';

const CardOutput = ({ title, titleAlign, text }) => {
  const data = useSelector(selectTransform);

  return (
    <Container textarea={true}>
      <Title align={titleAlign}>{title}</Title>
      <Content>
        <OutputText>{data.ciphertext}</OutputText>
      </Content>
    </Container>
  );
};

export default CardOutput;
