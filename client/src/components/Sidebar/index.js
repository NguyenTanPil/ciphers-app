import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { CgPushChevronRight } from 'react-icons/cg';
import { handlShowDetail } from '../../feature/Utils';
import {
  Container,
  Header,
  Line,
  ListLinks,
  NavItem,
  NavLink,
  TitleLink,
  Wrap,
} from './SidebarStyles';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { t } = useTranslation();
  const containerWrap = useRef(null);

  const secretCipherContainerRef = useRef(null);
  const secretCipherContentRef = useRef(null);
  const [showSecretCipher, setShowSecretCipher] = useState(true);

  const publicCipherContainerRef = useRef(null);
  const publicCipherContentRef = useRef(null);
  const [showPublicCipher, setShowPublicCipher] = useState(false);

  const utilsContainerRef = useRef(null);
  const utilsContentRef = useRef(null);
  const [showUtils, setShowUtils] = useState(false);

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
      <Wrap ref={containerWrap}>
        <Header>
          <button onClick={() => setShowSidebar(false)}>
            <CgPushChevronRight />
          </button>
        </Header>
        <ListLinks
          initHeight={showSecretCipher ? 1 : 0}
          ref={secretCipherContainerRef}
        >
          <div ref={secretCipherContentRef}>
            <NavItem>
              <TitleLink
                onClick={() =>
                  handlShowDetail(
                    secretCipherContainerRef,
                    secretCipherContentRef,
                    showSecretCipher,
                    setShowSecretCipher,
                    55.5,
                    0,
                  )
                }
              >
                <span>{t('secret_cipher')}</span>
                {showSecretCipher ? (
                  <AiOutlineMinusSquare />
                ) : (
                  <AiOutlinePlusSquare />
                )}{' '}
              </TitleLink>
            </NavItem>
            <NavItem>
              <NavLink to="/affine">{t('affine')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/base64">{t('base64')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/">
                {t('ceasar')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/des">{t('des')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/hill">{t('hill')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/multiplicative">{t('multiplicative')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/reverse">{t('reverse')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/rot13">{t('rot13')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/simple-substitution">
                {t('simple_substitution')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/transposition">{t('transposition')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/vigenere">{t('vigenere')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/xor">{t('xor')}</NavLink>
            </NavItem>
          </div>
        </ListLinks>
        <ListLinks
          initHeight={showPublicCipher ? 1 : 0}
          ref={publicCipherContainerRef}
        >
          <div ref={publicCipherContentRef}>
            <NavItem>
              <TitleLink
                onClick={() =>
                  handlShowDetail(
                    publicCipherContainerRef,
                    publicCipherContentRef,
                    showPublicCipher,
                    setShowPublicCipher,
                    55.5,
                    0,
                  )
                }
              >
                <span>{t('public_cipher')}</span>
                {showPublicCipher ? (
                  <AiOutlineMinusSquare />
                ) : (
                  <AiOutlinePlusSquare />
                )}{' '}
              </TitleLink>
            </NavItem>
            <NavItem>
              <NavLink to="/elgamal">{t('elgamal')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/rsa">{t('rsa')}</NavLink>
            </NavItem>
          </div>
        </ListLinks>
        <ListLinks initHeight={showUtils ? 1 : 0} ref={utilsContainerRef}>
          <div ref={utilsContentRef}>
            <NavItem>
              <TitleLink
                onClick={() =>
                  handlShowDetail(
                    utilsContainerRef,
                    utilsContentRef,
                    showUtils,
                    setShowUtils,
                    55.5,
                    0,
                  )
                }
              >
                <span>{t('utils')}</span>
                {showUtils ? (
                  <AiOutlineMinusSquare />
                ) : (
                  <AiOutlinePlusSquare />
                )}{' '}
              </TitleLink>
            </NavItem>
            <NavItem>
              <NavLink to="/modulo">{t('cal_modulo')}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/modular-inverse">{t('mod_inverse')}</NavLink>
            </NavItem>
          </div>
        </ListLinks>
        <ListLinks>
          <Line />
        </ListLinks>
      </Wrap>
    </Container>
  );
};

export default Sidebar;
