import { Description } from './CardStyles';

const CardDescription = ({ cipher, desc, link, utils, more }) => {
  return (
    <Description>
      <div>
        <h1>
          {cipher} {utils ? '' : 'cipher'}:{' '}
          {utils ? 'Calculate ' : 'Encode and Decode'} {cipher}{' '}
          {utils ? 'of two integers' : 'to text'}
        </h1>
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {cipher} {utils ? '' : 'cipher'}{' '}
          </a>
          {desc}
        </p>
        {more && <p>{more}</p>}
      </div>
    </Description>
  );
};

export default CardDescription;
