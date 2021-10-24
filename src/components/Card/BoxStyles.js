import styled from 'styled-components';

export const Btns = styled.div`
  border-bottom: 1px solid #e3e8ec;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  @media only screen and (min-width: 1400px) {
    & {
      padding: 2rem 3.8rem;
    }
  }
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
  width: 11.6rem;

  &:hover {
    background-color: rgb(34, 150, 138);
  }

  @media only screen and (min-width: 1200px) {
    &:last-child {
      margin-top: 1rem;
    }
  }
`;

export const Counter = styled(Btns)`
  align-items: flex-start;
  flex-direction: column;
  padding: 2rem 2rem 1rem 2rem;
  div {
    margin: 0 auto;
    width: 100%;
  }

  label {
    color: #4db6ac;
    display: block;
    font-size: 1.4rem;
    padding-left: 1.8rem;
  }

  ${Btn} {
    margin-top: 0;
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
  div {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
  }

  span {
    color: #797f86;
    font-size: 1.4rem;
    height: 2.6rem;
    line-height: 2.6rem;
    letter-spacing: 1px;
    padding-left: 1.8rem;
    text-align: left;
    vertical-align: middle;

    &:first-child {
      font-size: 1.2rem;
      text-transform: uppercase;
    }
  }
`;

export const TransformOutPut = styled(Counter)`
  flex-direction: row;
  padding: 0 2rem;

  & > div {
    height: 100%;
    padding: 2rem 0 2rem 1.8rem;
    width: 50%;
  }

  label {
    padding-left: 0;
  }
`;

export const CaseStrategy = styled.div`
  border-right: 1px solid #e3e8ec;
  display: flex;
  flex-direction: column;
`;

export const WrapDropdown = styled.div`
  position: relative;

  svg {
    color: #797f86;
    font-size: 1.8rem;
    position: absolute;
    top: 1.2rem;
    right: 2.5rem;
    pointer-events: none;
  }

  ul {
    width: calc(100% + 3.8rem);
  }
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  color: #797f86;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  outline: none;
  padding: 1.2rem 3.2rem 0 0;
  text-align: left;
  width: 100%;

  &:first-letter {
    text-transform: uppercase;
  }
`;

export const DropdownList = styled.ul`
  background-color: #fff;
  box-shadow: 0 0.2rem 0.5rem 0 rgb(0 0 0 / 16%),
    0 0.2rem 1rem 0 rgb(0 0 0 / 12%);
  border-radius: 0.25rem;
  color: #797f86;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -3.8rem;
  top: 140%;
  z-index: 1008;
  width: 100%;

  li {
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 1.25rem;
    padding-left: 3.8rem;
    transition: all 0.2s linear 0s;

    &:hover {
      background-color: rgba(227, 232, 236, 0.4);
      padding-left: 4.2rem;
    }

    &.active {
      background-color: #e3e8ec;
      color: #26a69a;
    }

    &:first-letter {
      text-transform: uppercase;
    }
  }
`;

export const ForeignChars = styled.div`
  ${WrapDropdown} {
    padding-top: 1.2rem;

    button {
      background-color: transparent;
      border: none;
      color: #797f86;
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: 600;
      outline: none;
      transition: color 0.2s ease 0s;

      &:first-letter {
        text-transform: uppercase;
      }

      &:first-child {
        margin-right: 1rem;
      }

      &.active {
        color: #26a69a;
      }
    }
  }
`;
