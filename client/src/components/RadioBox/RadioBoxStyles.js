import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin-top: 1rem;
  width: 100%;
`;

export const Wrap = styled.div`
  position: relative;
  display: inline-block;

  input {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

export const State = styled.div`
  label {
    display: inline-block;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: 400;
    position: initial;
    text-indent: 2.4rem;
    vertical-align: bottom;

    &:before,
    &:after {
      background-color: transparent;
      border: 0.1rem solid transparent;
      border-radius: 50%;
      content: '';
      height: 1.4rem;
      position: absolute;
      left: 0;
      top: 1px;
      width: 1.4rem;
    }

    &:before {
      border-color: ${(props) => (props.active ? '#26a69a' : '#797f86')};
    }

    &:after {
      background-color: #26a69a;
      transition: transform 0.25s ease;
      transform: ${(props) => (props.active ? 'scale(0.45)' : 'scale(0)')};
    }
  }
`;
