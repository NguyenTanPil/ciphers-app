import { useState } from 'react';
import {
  Alphabet,
  Btn,
  Btns,
  CountBtn,
  Counter,
  InputGroup,
} from './BoxStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  getData,
  selectTransform,
  decreaseKey,
  increaseKey,
  resetData,
} from '../../feature/transform/transformSlice';

const Box = () => {
  const [alphabet, setAlphabet] = useState('abcdefghijklmnopqrstuvwxyz');
  const data = useSelector(selectTransform);
  const dispatch = useDispatch();

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

  const handleCountChange = (e) => {
    getKey(e.target.value);
  };

  const handleAlphabetChange = (e) => {
    setAlphabet(e.target.value);
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
    const { ciphertext } = await submit('/api/ceasar/encode', text, key);
    getCiphertext(ciphertext);
  };

  const decode = async (text, key) => {
    const { ciphertext } = await submit('/api/ceasar/decode', text, key);
    getCiphertext(ciphertext);
  };

  return (
    <>
      <Btns>
        <Btn onClick={() => encode(data.plaintext, data.key)}>encode</Btn>
        <Btn onClick={() => decode(data.plaintext, data.key)}>decode</Btn>
        <Btn onClick={() => dispatch(resetData())}>Reset</Btn>
      </Btns>
      <Counter>
        <label htmlFor="key">Key</label>
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
      </Counter>
      <Alphabet>
        <label>ALPHABET</label>
        <InputGroup>
          <input type="text" value={alphabet} onChange={handleAlphabetChange} />
        </InputGroup>
      </Alphabet>
    </>
  );
};

export default Box;
