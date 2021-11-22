import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountBtn, InputGroup } from '../../components/Card/CardStyles';
import { Counter, BtnLargeActive } from './rsaSlytes';
import {
  decreaseE,
  increaseE,
  decreaseD,
  increaseD,
  selectRsa,
  getData,
} from './rsaSlice';

const ExtraInput = ({ getParams }) => {
  const data = useSelector(selectRsa);
  const dispatch = useDispatch();
  const [selectInput, setSelectInput] = useState('e');

  const selectTypeInput = (curr, param) => {
    setSelectInput(curr);
    dispatch(
      getData({
        ...data,
        [param]: 1,
      }),
    );
  };

  return (
    <>
      {selectInput === 'e' ? (
        <Counter>
          <div>
            <label htmlFor="e">
              <BtnLargeActive
                current={selectInput === 'e' ? 1 : 0}
                onClick={() => selectTypeInput('e', 'd')}
              >
                e
              </BtnLargeActive>
              <BtnLargeActive
                current={selectInput === 'd' ? 1 : 0}
                onClick={() => selectTypeInput('d', 'e')}
              >
                d
              </BtnLargeActive>
            </label>

            <InputGroup>
              <CountBtn
                colorDisabled={(theme) => theme.color}
                onClick={() => dispatch(decreaseE())}
              >
                {' '}
                -{' '}
              </CountBtn>
              <input
                type="number"
                value={data.e}
                onChange={(e) => getParams(e, 'e')}
              />
              <CountBtn
                colorDisabled={(theme) => theme.color}
                onClick={() => dispatch(increaseE())}
              >
                {' '}
                +{' '}
              </CountBtn>
            </InputGroup>
          </div>
        </Counter>
      ) : (
        <Counter>
          <div>
            <label htmlFor="d">
              <BtnLargeActive
                current={selectInput === 'e' ? 1 : 0}
                onClick={() => selectTypeInput('e', 'd')}
              >
                e
              </BtnLargeActive>
              <BtnLargeActive
                current={selectInput === 'd' ? 1 : 0}
                onClick={() => selectTypeInput('d', 'e')}
              >
                d
              </BtnLargeActive>
            </label>

            <InputGroup>
              <CountBtn
                colorDisabled={(theme) => theme.color}
                onClick={() => dispatch(decreaseD())}
              >
                {' '}
                -{' '}
              </CountBtn>
              <input
                type="number"
                value={data.d}
                onChange={(e) => getParams(e, 'd')}
              />
              <CountBtn
                colorDisabled={(theme) => theme.color}
                onClick={() => dispatch(increaseD())}
              >
                {' '}
                +{' '}
              </CountBtn>
            </InputGroup>
          </div>
        </Counter>
      )}
    </>
  );
};

export default ExtraInput;
