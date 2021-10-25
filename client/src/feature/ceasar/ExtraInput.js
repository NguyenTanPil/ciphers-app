import {
  CountBtn,
  Counter,
  InputGroup,
} from '../../components/Card/CardStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getData, selectCeasar, decreaseKey, increaseKey } from './ceasarSlice';

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
    getKey(e.target.value);
  };

  return (
    <>
      <Counter>
        <div>
          <label htmlFor="key">KEY</label>
          <InputGroup>
            <CountBtn
              disabled={parseInt(data.key) === 0 ? true : false}
              onClick={decrease}
            >
              {' '}
              -{' '}
            </CountBtn>
            <input
              type="number"
              min={0}
              max={26}
              value={data.key}
              onChange={handleCountChange}
            />
            <CountBtn
              disabled={parseInt(data.key) === 26 ? true : false}
              onClick={increase}
            >
              {' '}
              +{' '}
            </CountBtn>
          </InputGroup>
        </div>
      </Counter>
    </>
  );
};

export default ExtraInput;
