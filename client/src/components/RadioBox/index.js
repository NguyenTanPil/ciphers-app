import { Container, State, Wrap } from './RadioBoxStyles';

const RadioBox = ({ label, name, value, current, handleChange }) => {
  return (
    <Container>
      <Wrap>
        <input
          type="radio"
          name={name}
          id={value}
          value={value}
          checked={current === value ? true : false}
          onChange={(e) => handleChange(e.target.id)}
        />
        <State active={current === value ? 1 : 0}>
          <label htmlFor={value}>{label}</label>
        </State>
      </Wrap>
    </Container>
  );
};

export default RadioBox;
