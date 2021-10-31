import { Description } from './CardStyles';
import { useTranslation } from 'react-i18next';

const CardDescription = ({ cipher, desc, link, utils, more }) => {
  const { t } = useTranslation();

  return (
    <Description>
      <div>
        <h1>
          {cipher}: {utils ? utils : t('utils_word')} {utils ? '' : cipher}{' '}
          {utils ? t('to_integer') : t('to_text')}
        </h1>
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {cipher}
          </a>
          {desc}
        </p>
      </div>
    </Description>
  );
};

export default CardDescription;
