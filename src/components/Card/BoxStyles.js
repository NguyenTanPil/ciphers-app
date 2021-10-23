import styled from 'styled-components';

export const Btns = styled.div`
  border-bottom: 1px solid #e3e8ec;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
`;
export const Btn = styled.button`
  background-color: #26a69a;
  border: none;
  border-radius: 0.2rem;
  color: rgb(232, 230, 227);
  cursor: pointer;
  font-weight: 600;
  height: 3.6rem;
  letter-spacing: 0.5px;
  line-height: 3.6rem;
  max-width: 11.6rem;
  padding: 0 3.2rem;
  text-align: center;
  text-decoration-color: initial;
  text-transform: uppercase;
  transition: background-color 0.3s ease 0s;
  vertical-align: middle;

  &:hover {
    background-color: rgb(34, 150, 138);
  }
`;

export const Counter = styled(Btns)`
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  max-width: 41rem;

  label {
    color: #4db6ac;
    display: block;
    font-size: 1.4rem;
    padding-left: 1.8rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  input {
    border: none;
    color: #797f86;
    flex-grow: 1;
    font-size: 1.6rem;
    letter-spacing: 1px;
    outline: none;
    text-align: center;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    -moz-appearance: textfield;
  }
`;

export const CountBtn = styled(Btn)`
  background-color: transparent;
  color: ${(props) => (props.disabled ? '#797f86' : '#000')};
  cursor: ${(props) => (props.disabled ? 'initial' : 'pointer')};
  font-size: 2.6rem;
  font-weight: 600;
  height: 4.6rem;
  padding: 0;
  width: 4.6rem;

  &:hover {
    background-color: transparent;
    color: ${(props) => (props.disabled ? '#797f86' : '#4db6ac')};
    transform: ${(props) => (props.disabled ? 'scale(1)' : 'scale(1.5)')};
  }
`;

export const Alphabet = styled(Counter)`
  input {
    height: 4.6rem;
    padding-left: 1.8rem;
    text-align: left;
  }
`;
