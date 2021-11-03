import { useTranslation } from 'react-i18next';
import { CgPushChevronRight } from 'react-icons/cg';
import {
  Container,
  Header,
  ListLinks,
  NavItem,
  NavLink,
  Wrap,
} from './SidebarStyles';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { t } = useTranslation();

  const handleShow = (e) => {
    if (e.target.classList.contains('close') || e.target.nodeName === 'A') {
      setShowSidebar(false);
    }
  };

  return (
    <Container
      className={showSidebar ? 'active close' : ''}
      onClick={handleShow}
    >
      <Wrap>
        <Header>
          <button onClick={() => setShowSidebar(false)}>
            <CgPushChevronRight />
          </button>
        </Header>
        <ListLinks>
          <NavItem>
            <NavLink exact to="/">
              {t('ceasar')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/affine">{t('affine')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/reverse">{t('reverse')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/transposition">{t('transposition')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/simple-substitution">
              {t('simple_substitution')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/vigenere">{t('vigenere')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/hill">hill</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/modulo">{t('cal_modulo')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/modular-inverse">{t('mod_inverse')}</NavLink>
          </NavItem>
        </ListLinks>
      </Wrap>
    </Container>
  );
};

export default Sidebar;
