import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import CardCounter from '../../components/Card/CardCounter';
import {
  decreaseKey,
  getData,
  increaseKey,
  selectMultiplicative,
} from './multiplicativeSlice';

const ExtraInput = () => {
  const data = useSelector(selectMultiplicative);
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

  const increase = () => {
    dispatch(increaseKey());
  };

  const decrease = () => {
    dispatch(decreaseKey());
  };

  const handleCountChange = (e) => {
    if (e.target.value) {
      const value = parseInt(e.target.value);
      if (value > 25) {
        console.log(value);
        getKey(25);
      } else {
        getKey(value);
      }
    } else {
      getKey('');
    }
  };

  return (
    <CardCounter
      label={t('key')}
      inputValue={data.key}
      handleCountChange={handleCountChange}
      increase={increase}
      decrease={decrease}
      min={0}
      max={25}
    />
  );
};

export default ExtraInput;
