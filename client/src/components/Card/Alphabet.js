import { AlphabetWrap } from './CardStyles';
import { useTranslation } from 'react-i18next';

const Alphabet = () => {
  const { t } = useTranslation();

  return (
    <AlphabetWrap>
      <label>{t('alphabet')}</label>
      <div>
        <span>abcdefghijklmnopqrstuvwxyz</span>
        <span>abcdefghijklmnopqrstuvwxyz</span>
      </div>
    </AlphabetWrap>
  );
};

export default Alphabet;
