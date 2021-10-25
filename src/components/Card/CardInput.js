import { Container, Title, Content, TextareaInput } from './CardStyles';

const CardInput = ({ title, titleAlign, plaintext, getPlaintext }) => {
  const handleChange = (e) => {
    getPlaintext(e.target.value);
  };

  return (
    <Container textarea={true}>
      <Title align={titleAlign}>{title}</Title>
      <Content>
        <TextareaInput value={plaintext} onChange={handleChange} />
      </Content>
    </Container>
  );
};

export default CardInput;
