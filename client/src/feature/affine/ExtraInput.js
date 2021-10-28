import {
  CountBtn,
  Counter,
  InputGroup,
} from '../../components/Card/CardStyles';
import { CounterWrap } from './AffineStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAffine,
  increaseSlope,
  decreaseSlope,
  increaseIntercept,
  decreaseIntercept,
  getData,
} from './affineSlice';

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

  const handleFirstCountChange = (e) => {
    const value = parseInt(e.target.value);
    if (value) {
      if (value > 26) {
        getKey({ ...data.key, a: 26 });
      } else {
        getKey({ ...data.key, a: value });
      }
    } else {
      getKey({ ...data.key, a: 0 });
    }
  };

  const handleSecondCountChange = (e) => {
    const value = parseInt(e.target.value);
    if (value) {
      if (value > 26) {
        getKey({ ...data.key, b: 26 });
      } else {
        getKey({ ...data.key, b: value });
      }
    } else {
      getKey({ ...data.key, b: 0 });
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
      <Counter>
        <div>
          <label htmlFor="key">SLOPE / A</label>
          <InputGroup>
            <CountBtn
              disabled={parseInt(data.key.a) === 0 ? true : false}
              colorDisabled={(theme) => theme.color}
              onClick={decreaseSlopeCounter}
            >
              {' '}
              -{' '}
            </CountBtn>
            <input
              type="number"
              min={0}
              max={26}
              value={data.key.a}
              onChange={handleFirstCountChange}
            />
            <CountBtn
              disabled={parseInt(data.key.a) === 26 ? true : false}
              colorDisabled={(theme) => theme.color}
              onClick={increaseSlopeCounter}
            >
              {' '}
              +{' '}
            </CountBtn>
          </InputGroup>
        </div>
      </Counter>
      <Counter>
        <div>
          <label htmlFor="key">INTERCEPT / B</label>
          <InputGroup>
            <CountBtn
              disabled={parseInt(data.key.b) === 0 ? true : false}
              onClick={decreaseInterceptCounter}
            >
              {' '}
              -{' '}
            </CountBtn>
            <input
              type="number"
              min={0}
              max={26}
              value={data.key.b}
              onChange={handleSecondCountChange}
            />
            <CountBtn
              disabled={parseInt(data.key.b) === 26 ? true : false}
              onClick={increaseInterceptCounter}
            >
              {' '}
              +{' '}
            </CountBtn>
          </InputGroup>
        </div>
      </Counter>
    </CounterWrap>
  );
};

export default ExtraInput;
