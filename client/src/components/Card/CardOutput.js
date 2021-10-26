import { Container, Content, OutputText, Title } from './CardStyles';
import loadingIcon from './loading.gif';

const CardOutput = ({
  title,
  titleAlign,
  currentCase,
  foreignChars,
  ciphertext,
  loading,
}) => {
  const formatOutput = () => {
    if (foreignChars === 'ignore' && currentCase === 'upper case') {
      return ciphertext.replace(/\s/g, '').toUpperCase();
    }

    if (foreignChars === 'ignore' && currentCase === 'lower case') {
      return ciphertext.replace(/\s/g, '').toLowerCase();
    }

    if (foreignChars === 'ignore' && currentCase === 'maintain case') {
      return ciphertext.replace(/\s/g, '');
    }

    if (foreignChars === 'include' && currentCase === 'upper case') {
      return ciphertext.toUpperCase();
    }

    if (foreignChars === 'include' && currentCase === 'lower case') {
      return ciphertext.toLowerCase();
    }

    if (foreignChars === 'include' && currentCase === 'maintain case') {
      return ciphertext;
    }
  };

  return (
    <Container textarea={true}>
      <Title align={titleAlign}>{title}</Title>
      <Content>
        <OutputText>
          {loading ? (
            <img src={loadingIcon} alt="loading output" />
          ) : (
            formatOutput()
          )}
        </OutputText>
      </Content>
    </Container>
  );
};

export default CardOutput;
