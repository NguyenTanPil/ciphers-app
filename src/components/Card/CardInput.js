import { Container, Title, Content, TextareaInput } from './CardStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  getData,
  selectTransform,
} from '../../feature/transform/transformSlice';

const CardInput = ({ title, titleAlign }) => {
  const data = useSelector(selectTransform);
  const dispatch = useDispatch();

  const getPlaintext = (value) => {
    dispatch(
      getData({
        ...data,
        plaintext: value,
      }),
    );
  };

  const handleChange = (e) => {
    getPlaintext(e.target.value);
  };
  return (
    <Container textarea={true}>
      <Title align={titleAlign}>{title}</Title>
      <Content>
        <TextareaInput value={data.plaintext} onChange={handleChange} />
      </Content>
    </Container>
  );
};

export default CardInput;
