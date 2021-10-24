import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0.2rem 0.5rem 0 rgb(0 0 0 / 16%),
    0 0.2rem 1rem 0 rgb(0 0 0 / 12%);
  box-sizing: border-box;
  height: ${(props) => (props.textarea ? '30rem' : 'auto')};
  max-width: 50rem;
  margin-top: 1rem;
  padding: 0 0.75rem;
  position: relative;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    width: 31.5%;
  }
`;

export const Title = styled.div`
  border-bottom: 1px solid #e3e8ec;
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
  border: none;
  color: #797f86;
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
    border-bottom: 1px solid #26a69a;
    box-shadow: 0 1px 0 0 #26a69a;
  }
`;

export const OutputText = styled.span`
  color: #797f86;
  display: block;
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
`;
