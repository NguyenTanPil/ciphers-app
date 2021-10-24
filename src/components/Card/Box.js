import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseKey,
  getData,
  increaseKey,
  resetData,
  selectTransform,
} from '../../feature/transform/transformSlice';
import {
  Alphabet,
  Btn,
  Btns,
  CaseStrategy,
  CountBtn,
  Counter,
  DropdownButton,
  DropdownList,
  ForeignChars,
  InputGroup,
  TransformOutPut,
  WrapDropdown,
} from './BoxStyles';

import { RiArrowDownSFill } from 'react-icons/ri';
import { useState } from 'react';

const Box = () => {
  const data = useSelector(selectTransform);
  const dispatch = useDispatch();
  const [showCase, setShowCase] = useState(false);

  const getCiphertext = (value) => {
    dispatch(
      getData({
        ...data,
        ciphertext: value,
      }),
    );
  };

  const getKey = (value) => {
    dispatch(
      getData({
        ...data,
        key: value,
      }),
    );
  };

  const getForeignChars = (value) => {
    dispatch(
      getData({
        ...data,
        foreignChars: value,
      }),
    );
  };

  const getCaseStategy = (e) => {
    const value = e.target.id;
    const newCases = data.caseStrategy.map((item) => {
      if (item.value === value) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setShowCase(false);

    dispatch(
      getData({
        ...data,
        caseStrategy: newCases,
      }),
    );
  };

  const handleCountChange = (e) => {
    getKey(e.target.value);
  };

  const submit = async (url, mess, k) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        text: mess,
        key: k,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const result = await response.json();
    return result;
  };

  const encode = async (text, key) => {
    const { ciphertext } = await submit(
      '/api/ceasar/encode',
      text,
      parseInt(key),
    );
    getCiphertext(ciphertext);
  };

  const decode = async (text, key) => {
    const { ciphertext } = await submit(
      '/api/ceasar/decode',
      text,
      parseInt(key),
    );
    getCiphertext(ciphertext);
  };

  const getCurrentCase = () => {
    return data.caseStrategy.filter((item) => item.active)[0].value;
  };

  return (
    <>
      <Btns>
        <Btn onClick={() => encode(data.plaintext, data.key)}>encode</Btn>
        <Btn onClick={() => decode(data.plaintext, data.key)}>decode</Btn>
        <Btn onClick={() => dispatch(resetData())}>Reset</Btn>
      </Btns>

      <Counter>
        <div>
          <label htmlFor="key">KEY</label>
          <InputGroup>
            <CountBtn
              disabled={parseInt(data.key) === 0 ? true : false}
              onClick={() => dispatch(decreaseKey())}
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
              onClick={() => dispatch(increaseKey())}
            >
              {' '}
              +{' '}
            </CountBtn>
          </InputGroup>
        </div>
      </Counter>

      <Alphabet>
        <label>ALPHABET</label>
        <div>
          <span>abcdefghijklmnopqrstuvwxyz</span>
          <span>abcdefghijklmnopqrstuvwxyz</span>
        </div>
      </Alphabet>

      <TransformOutPut>
        <CaseStrategy>
          <label>CASE STRATEGY</label>
          <WrapDropdown>
            <DropdownButton onClick={() => setShowCase(!showCase)}>
              {getCurrentCase()}
            </DropdownButton>
            {showCase && (
              <DropdownList>
                {data.caseStrategy.map((strategy, key) => {
                  return (
                    <li
                      className={strategy.active ? 'active' : ''}
                      key={key}
                      id={strategy.value}
                      onClick={getCaseStategy}
                    >
                      {strategy.value}
                    </li>
                  );
                })}
              </DropdownList>
            )}
            <RiArrowDownSFill />
          </WrapDropdown>
        </CaseStrategy>

        <ForeignChars>
          <label>FOREIGN CHARS</label>
          <WrapDropdown>
            <button
              className={data.foreignChars === 'include' ? 'active' : ''}
              id="include"
              onClick={(e) => getForeignChars(e.target.id)}
            >
              include
            </button>
            <button
              className={data.foreignChars === 'ignore' ? 'active' : ''}
              id="ignore"
              onClick={(e) => getForeignChars(e.target.id)}
            >
              ignore
            </button>
          </WrapDropdown>
        </ForeignChars>
      </TransformOutPut>
    </>
  );
};

export default Box;
