import { Container, Wrap } from '../Utils';
import notFoundImg from './not-found-img.png';
import { GroupNotFound, NotFoundBtn } from './NotFoundStyles';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Wrap>
        <GroupNotFound>
          <img src={notFoundImg} alt="Not Found" />
          <NotFoundBtn to="/">{t('back_to_home')}</NotFoundBtn>
        </GroupNotFound>
      </Wrap>
    </Container>
  );
};

export default NotFound;
