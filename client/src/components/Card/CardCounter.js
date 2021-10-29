import { CountBtn, Counter, InputGroup } from './CardStyles';

const CardCounter = ({
  label,
  inputValue,
  handleCountChange,
  increase,
  decrease,
  min,
  max,
}) => {
  return (
    <Counter>
      <div>
        <label htmlFor={label}>{label}</label>
        <InputGroup>
          <CountBtn
            colorDisabled={(theme) => theme.color}
            disabled={parseInt(inputValue) === 0 && min === 0 ? true : false}
            onClick={decrease}
          >
            {' '}
            -{' '}
          </CountBtn>
          <input
            type="number"
            min={min}
            max={max}
            value={inputValue}
            onChange={handleCountChange}
          />
          <CountBtn
            colorDisabled={(theme) => theme.color}
            disabled={parseInt(inputValue) === max && max ? true : false}
            onClick={increase}
          >
            {' '}
            +{' '}
          </CountBtn>
        </InputGroup>
      </div>
    </Counter>
  );
};

export default CardCounter;
