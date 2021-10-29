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
        key: value,
      }),
    );
  };

  const handleSlopeCountChange = (e) => {
    if (e.target.value) {
      const value = parseInt(e.target.value);
      if (value > 26) {
        getKey({ ...data.key, a: 26 });
      } else {
        getKey({ ...data.key, a: value });
      }
    } else {
      getKey({ ...data.key, a: '' });
    }
  };

  const handleInterceptCountChange = (e) => {
    if (e.target.value) {
      const value = parseInt(e.target.value);
      if (value > 26) {
        getKey({ ...data.key, b: 26 });
      } else {
        getKey({ ...data.key, b: value });
      }
    } else {
      getKey({ ...data.key, b: '' });
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
        inputValue={data.key.a}
        handleCountChange={handleSlopeCountChange}
        increase={increaseSlopeCounter}
        decrease={decreaseSlopeCounter}
        min={0}
        max={26}
      />
      <CardCounter
        label="INTERCEPT / B"
        inputValue={data.key.b}
        handleCountChange={handleInterceptCountChange}
        increase={increaseInterceptCounter}
        decrease={decreaseInterceptCounter}
        min={0}
        max={26}
      />
    </CounterWrap>
  );
};

export default ExtraInput;
