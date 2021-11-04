import { Container, Title, Content, TextareaInput } from './CardStyles';

const CardInput = ({ title, titleAlign, plaintext, getPlaintext }) => {
  return (
    <Container textarea={true}>
      <Title align={titleAlign}>{title}</Title>
      <Content>
        <TextareaInput
          placeholder="Enter your message..."
          value={plaintext}
          onChange={getPlaintext}
        />
      </Content>
    </Container>
  );
};

export default CardInput;
