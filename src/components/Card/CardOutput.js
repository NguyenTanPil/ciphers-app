import { Container, Content, OutputText, Title } from './CardStyles';
import { useSelector } from 'react-redux';
import { selectTransform } from '../../feature/transform/transformSlice';

const CardOutput = ({ title, titleAlign }) => {
  const data = useSelector(selectTransform);

  const getCurrentCase = () => {
    return data.caseStrategy.filter((item) => item.active)[0].value;
  };

  const formatOutput = () => {
    const currentCase = getCurrentCase();

    if (data.foreignChars === 'ignore' && currentCase === 'upper case') {
      return data.ciphertext.replace(/\s/g, '').toUpperCase();
    }

    if (data.foreignChars === 'ignore' && currentCase === 'lower case') {
      return data.ciphertext.replace(/\s/g, '').toLowerCase();
    }

    if (data.foreignChars === 'ignore' && currentCase === 'maintain case') {
      return data.ciphertext.replace(/\s/g, '');
    }

    if (data.foreignChars === 'include' && currentCase === 'upper case') {
      return data.ciphertext.toUpperCase();
    }

    if (data.foreignChars === 'include' && currentCase === 'lower case') {
      return data.ciphertext.toLowerCase();
    }

    if (data.foreignChars === 'include' && currentCase === 'maintain case') {
      return data.ciphertext;
    }
  };

  return (
    <Container textarea={true}>
      <Title align={titleAlign}>{title}</Title>
      <Content>
        <OutputText>{formatOutput()}</OutputText>
      </Content>
    </Container>
  );
};

export default CardOutput;
