import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import RadioBox from '../../components/RadioBox';
import { getData, selectRot13 } from './rot13Slice';
import { Container } from './Rot13Styles';

const ExtraInput = () => {
  const data = useSelector(selectRot13);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const getKey = (value) => {
    dispatch(
      getData({
        ...data,
        key: value,
      }),
    );
  };

  return (
    <Container>
      <label>{t('variant')}</label>
      <RadioBox
        label="ROT5 (0-9)"
        name="variant"
        value="5"
        current={data.key}
        handleChange={getKey}
      />
      <RadioBox
        label="ROT13 (A-Z, a-z)"
        name="variant"
        value="13"
        current={data.key}
        handleChange={getKey}
      />
      <RadioBox
        label="ROT18 (0-9, A-Z, a-z)"
        name="variant"
        value="18"
        current={data.key}
        handleChange={getKey}
      />
    </Container>
  );
};

export default ExtraInput;
