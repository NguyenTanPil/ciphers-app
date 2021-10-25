import { Description } from './CardStyles';

const CardDescription = ({ cipher, desc, link }) => {
  return (
    <Description>
      <div>
        <h1>
          {cipher} cipher: Encode and Decode {cipher} to text
        </h1>
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {cipher} cipher{' '}
          </a>
          {desc}
        </p>
      </div>
    </Description>
  );
};

export default CardDescription;
