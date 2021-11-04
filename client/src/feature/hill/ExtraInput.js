import { useDispatch, useSelector } from 'react-redux';
import CardCounter from '../../components/Card/CardCounter';
import { CounterWrap } from '../affine/AffineStyles';
import {
  decreaseA,
  decreaseB,
  decreaseC,
  decreaseD,
  getData,
  increaseA,
  increaseB,
  increaseC,
  increaseD,
  selectHill,
} from './hillSlice';

const ExtraInput = () => {
  const data = useSelector(selectHill);
  const dispatch = useDispatch();

  const getKey = (value) => {
    dispatch(
      getData({
        ...data,
        key: value,
      }),
    );
  };

  const handleCountChange = (e, field) => {
    if (e.target.value) {
      const value = parseInt(e.target.value);
      if (value > 25) {
        getKey({ ...data.key, [field]: 25 });
      } else {
        getKey({ ...data.key, [field]: value });
      }
    } else {
      getKey({ ...data.key, [field]: '' });
    }
  };

  const handleACountChange = (e) => {
    handleCountChange(e, 'a');
  };

  const handleBCountChange = (e) => {
    handleCountChange(e, 'b');
  };

  const handleCCountChange = (e) => {
    handleCountChange(e, 'c');
  };

  const handleDCountChange = (e) => {
    handleCountChange(e, 'd');
  };

  const increaseACounter = () => {
    dispatch(increaseA());
  };

  const decreaseACounter = () => {
    dispatch(decreaseA());
  };

  const increaseBCounter = () => {
    dispatch(increaseB());
  };

  const decreaseBCounter = () => {
    dispatch(decreaseB());
  };

  const increaseCCounter = () => {
    dispatch(increaseC());
  };

  const decreaseCCounter = () => {
    dispatch(decreaseC());
  };

  const increaseDCounter = () => {
    dispatch(increaseD());
  };

  const decreaseDCounter = () => {
    dispatch(decreaseD());
  };

  return (
    <CounterWrap>
      <CardCounter
        label="INDEX / 1 - 1"
        inputValue={data.key.a}
        handleCountChange={handleACountChange}
        increase={increaseACounter}
        decrease={decreaseACounter}
        min={0}
        max={25}
      />
      <CardCounter
        label="INDEX / 1 - 2"
        inputValue={data.key.b}
        handleCountChange={handleBCountChange}
        increase={increaseBCounter}
        decrease={decreaseBCounter}
        min={0}
        max={25}
      />
      <CardCounter
        label="INDEX / 2 - 1"
        inputValue={data.key.c}
        handleCountChange={handleCCountChange}
        increase={increaseCCounter}
        decrease={decreaseCCounter}
        min={0}
        max={25}
      />
      <CardCounter
        label="INDEX / 2 - 2"
        inputValue={data.key.d}
        handleCountChange={handleDCountChange}
        increase={increaseDCounter}
        decrease={decreaseDCounter}
        min={0}
        max={25}
      />
    </CounterWrap>
  );
};

export default ExtraInput;
