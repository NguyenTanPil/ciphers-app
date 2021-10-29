import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 0.2rem;
  box-shadow: ${({ theme }) => theme.shadow};
  box-sizing: border-box;
  height: ${(props) => (props.textarea ? '30rem' : 'auto')};
  max-width: 50rem;
  margin-bottom: 4rem;
  padding: 0 0.75rem;
  position: relative;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    margin-bottom: 1rem;
    width: 31.5%;
  }
`;

export const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  border-radius: 0 0 0.2rem 0.2rem;
  color: #4db6ac;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 4.8rem;
  padding: 2rem;
  text-align: ${(props) => (props.align === 'center' ? 'center' : 'left')};
  text-transform: capitalize;
`;

export const Content = styled.div`
  display: block;
  width: 100%;
`;

export const TextareaInput = styled.textarea`
  background-color: ${({ theme }) => theme.background};
  border: none;
  color: ${({ theme }) => theme.text};
  display: block;
  font-family: 'Source Code Pro', monospace;
  font-weight: 400;
  font-size: 1.6rem;
  height: 20rem;
  line-height: 1.5;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  overflow: hidden;
  outline: none;
  padding: 2rem;
  resize: none;
  transition: all 0.2s ease 0s;
  width: 100%;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 1px 0 0 #26a69a;
  }
`;

export const OutputText = styled.span`
  color: #797f86;
  display: flex;
  font-family: 'Source Code Pro', monospace;
  font-weight: 400;
  font-size: 1.6rem;
  height: 20rem;
  line-height: 1.5;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  overflow: hidden;
  padding: 2rem;
  width: 100%;

  img {
    margin: auto;
  }
`;

export const Btns = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;

  @media only screen and (min-width: 576px) {
    padding: 2rem;
  }

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
  margin-top: 1rem;
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
`;

export const Counter = styled(Btns)`
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem 0.2rem;
  div {
    margin: 0 auto;
    width: 100%;
  }

  label {
    color: #4db6ac;
    display: block;
    font-size: 1.4rem;
    padding-left: 1.8rem;
    position: relative;
    text-transform: uppercase;

    button {
      height: 3rem;
      line-height: 3rem;
      padding: 0;
      position: absolute;
      right: 0;
      top: -50%;
      width: 3rem;

      svg {
        font-size: 2.6rem;
        margin-top: 0.2rem;
      }
    }
  }

  ${Btn} {
    margin-top: 0;
  }

  @media only screen and (min-width: 576px) {
    padding: 2rem 2rem 1rem 2rem;
  }

  @media only screen and (min-width: 1200px) {
    padding: 1rem 0.2rem;
  }

  @media only screen and (min-width: 1400px) {
    padding: 2rem 2rem 1rem 2rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  input {
    background-color: ${({ theme }) => theme.background};
    border: none;
    color: ${({ theme }) => theme.text};
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

  input[type='text'] {
    border-bottom: 1px solid transparent;
    margin-left: 1.8rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    text-align: left;

    &:focus {
      border-color: #4db6ac;
    }
  }
`;

export const CountBtn = styled(Btn)`
  background-color: transparent;
  color: ${(props) => (props.disabled ? '#797f86' : '#988f81')};
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

export const AlphabetWrap = styled(Counter)`
  div {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
  }

  span {
    color: ${({ theme }) => theme.text};
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
  padding: 0 0.2rem;

  & > div {
    height: 100%;
    padding: 2rem 0 2rem 1.8rem;
    width: 100%;
  }

  label {
    padding-left: 0;
  }

  @media only screen and (min-width: 576px) {
    padding: 0 2rem;

    & > div {
      width: 50%;
    }
  }

  @media only screen and (min-width: 1200px) {
    padding: 0 0.2rem;
  }

  @media only screen and (min-width: 1400px) {
    padding: 0 2rem;
  }
`;

export const CaseStrategy = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 576px) {
    border-bottom: none;
    border-right: 1px solid ${({ theme }) => theme.border};
  }

  @media only screen and (min-width: 1200px) {
    button {
      padding-right: 0;
    }
  }

  @media only screen and (min-width: 1400px) {
    button {
      padding-right: 3.2rem;
    }
  }
`;

export const WrapDropdown = styled.div`
  position: relative;

  svg {
    color: ${({ theme }) => theme.text};
    font-size: 1.8rem;
    position: absolute;
    top: 1.2rem;
    right: 2.5rem;
    pointer-events: none;
  }

  @media only screen and (min-width: 1200px) {
    svg {
      right: 0.5rem;
    }
  }

  @media only screen and (min-width: 1400px) {
    svg {
      right: 1.5rem;
    }
  }
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
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
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0 0.2rem 0.5rem 0 rgb(0 0 0 / 16%),
    0 0.2rem 1rem 0 rgb(0 0 0 / 12%);
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -1.8rem;
  top: 140%;
  z-index: 1008;
  width: calc(100% + 1.8rem);

  @media only screen and (min-width: 576px) {
    left: -3.8rem;
    width: calc(100% + 3.8rem);
  }

  li {
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 1.25rem;
    padding-left: 3.8rem;
    transition: all 0.2s linear 0s;

    &:hover {
      background-color: ${({ theme }) => theme.hover};
      padding-left: 4.2rem;
    }

    &.active {
      background-color: ${({ theme }) => theme.active};
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
      color: ${({ theme }) => theme.text};
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

export const Brick = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  padding: 1.25rem 1.8rem;

  svg {
    font-size: 1.6rem;
    font-weight: 600;
    fill: currentColor;
    margin-right: 0.5rem;
  }

  span {
    font-size: 1.4rem;
    line-height: 1.4;
    letter-spacing: 1px;
  }

  @media only screen and (min-width: 576px) {
    padding: 1.25rem 3.8rem;
  }

  @media only screen and (min-width: 1200px) {
    padding: 1.25rem 1.8rem;
  }

  @media only screen and (min-width: 1400px) {
    padding: 1.25rem 3.8rem;
  }
`;

export const Description = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 3.6rem 0;
  text-align: center;

  div {
    line-height: 1.5;
    letter-spacing: 0.1rem;
    margin: 0 auto;
    width: 80%;
  }

  h1 {
    color: ${({ theme }) => theme.title};
    display: block;
    font-size: 1.8rem;
    font-weight: 600;
    padding-bottom: 1.4rem;
    width: 100%;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 1.4rem;
    font-weight: 590;
    margin-bottom: 1rem;
    width: 100%;
  }

  a {
    color: #4db6ac;
    font-weight: 600;
  }

  @media only screen and (min-width: 576px) {
    h1 {
      font-size: 2.1rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media only screen and (min-width: 992px) {
    text-align: left;

    h1,
    p {
      max-width: 70rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    margin-top: 2rem;

    h1,
    p {
      max-width: 80rem;
    }
  }
`;
