import { useDispatch, useSelector } from 'react-redux';
import CardCounter from '../../components/Card/CardCounter';
import { decreaseKey, getData, increaseKey, selectCeasar } from './ceasarSlice';

const ExtraInput = () => {
  const data = useSelector(selectCeasar);
  const dispatch = useDispatch();

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
      if (value > 26) {
        console.log(value);
        getKey(26);
      } else {
        getKey(value);
      }
    } else {
      getKey('');
    }
  };

  return (
    <CardCounter
      label="Key"
      inputValue={data.key}
      handleCountChange={handleCountChange}
      increase={increase}
      decrease={decrease}
      min={0}
      max={26}
    />
  );
};

export default ExtraInput;
