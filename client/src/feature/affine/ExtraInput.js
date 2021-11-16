import { useDispatch, useSelector } from 'react-redux';
import CardCounter from '../../components/Card/CardCounter';
import {
  decreaseIntercept,
  decreaseSlope,
  getData,
  increaseIntercept,
  increaseSlope,
  selectAffine,
} from './affineSlice';
import { CounterWrap } from './AffineStyles';

const ExtraInput = () => {
  const data = useSelector(selectAffine);
  const dispatch = useDispatch();

  const getKey = (value) => {
    dispatch(
      getData({
        ...data,
        keys: value,
      }),
    );
  };

  const handleSlopeCountChange = (e) => {
    if (e.target.value) {
      const value = parseInt(e.target.value);
      if (value > 25) {
        getKey({ ...data.keys, a: 25 });
      } else {
        getKey({ ...data.keys, a: value });
      }
    } else {
      getKey({ ...data.keys, a: '' });
    }
  };

  const handleInterceptCountChange = (e) => {
    if (e.target.value) {
      const value = parseInt(e.target.value);
      if (value > 25) {
        getKey({ ...data.keys, b: 25 });
      } else {
        getKey({ ...data.keys, b: value });
      }
    } else {
      getKey({ ...data.keys, b: '' });
    }
  };

  const increaseSlopeCounter = () => {
    dispatch(increaseSlope());
  };

  const decreaseSlopeCounter = () => {
    dispatch(decreaseSlope());
  };

  const increaseInterceptCounter = () => {
    dispatch(increaseIntercept());
  };

  const decreaseInterceptCounter = () => {
    dispatch(decreaseIntercept());
  };

  return (
    <CounterWrap>
      <CardCounter
        label="SLOPE / A"
        inputValue={data.keys.a}
        handleCountChange={handleSlopeCountChange}
        increase={increaseSlopeCounter}
        decrease={decreaseSlopeCounter}
        min={0}
        max={25}
      />
      <CardCounter
        label="INTERCEPT / B"
        inputValue={data.keys.b}
        handleCountChange={handleInterceptCountChange}
        increase={increaseInterceptCounter}
        decrease={decreaseInterceptCounter}
        min={0}
        max={25}
      />
    </CounterWrap>
  );
};

export default ExtraInput;
