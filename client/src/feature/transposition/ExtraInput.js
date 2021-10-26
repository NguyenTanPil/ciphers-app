import { useDispatch, useSelector } from 'react-redux';
import { Counter, InputGroup } from '../../components/Card/CardStyles';
import { getData, selectTransposition } from './transpositionSlice';

const ExtraInput = () => {
  const data = useSelector(selectTransposition);
  const dispatch = useDispatch();

  const getKey = (value) => {
    dispatch(
      getData({
        ...data,
        key: value,
      }),
    );
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
            <input
              type="text"
              value={data.key}
              onChange={handleCountChange}
              placeholder="Enter columns number..."
            />
          </InputGroup>
        </div>
      </Counter>
    </>
  );
};

export default ExtraInput;
