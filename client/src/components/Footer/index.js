import { useState } from 'react';
import {
  ChangeLanguage,
  Container,
  Content,
  Wrap,
  BtnSmall,
} from './FooterStyles';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [language, setLanguage] = useState('en');
  const [t, i18n] = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.innerHTML);
    setLanguage(e.target.innerHTML);
  };

  return (
    <Container>
      <Wrap>
        <Content>
          <span>CipherVip</span> {t('footer')}
        </Content>
        <ChangeLanguage>
          <BtnSmall
            current={language === 'en' ? 1 : 0}
            onClick={handleLanguageChange}
          >
            en
          </BtnSmall>
          <BtnSmall
            current={language === 'vn' ? 1 : 0}
            onClick={handleLanguageChange}
          >
            vn
          </BtnSmall>
        </ChangeLanguage>
      </Wrap>
    </Container>
  );
};

export default Footer;
