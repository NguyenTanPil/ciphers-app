import { useEffect, useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import Sidebar from '../Sidebar';
import {
  Bar,
  Logo,
  Nav,
  NavItem,
  NavList,
  TrackMode,
  Wrapper,
} from './HeaderStyles';

const Header = ({ theme, setTheme }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const themeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.width = 'calc(100% - 1.7rem)';
    } else {
      document.body.removeAttribute('style');
    }
  }, [showSidebar]);

  return (
    <Nav>
      <Wrapper>
        <Logo to="/">CipherVip</Logo>
        <NavList>
          {/* <NavItem>{t('Welcome')}</NavItem> */}
          <NavItem>
            <TrackMode onClick={themeToggle} theme={theme}>
              <span>🌜</span>
              <div className="ball"></div>
              <span>🌞</span>
            </TrackMode>
          </NavItem>
          <NavItem>
            <Bar onClick={() => setShowSidebar(true)}>
              <AiOutlineBars />
            </Bar>
          </NavItem>
        </NavList>
      </Wrapper>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </Nav>
  );
};

export default Header;
