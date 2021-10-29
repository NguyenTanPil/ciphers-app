import {
  Container,
  Header,
  ListLinks,
  NavItem,
  NavLink,
  Wrap,
} from './SidebarStyles';
import { CgPushChevronRight } from 'react-icons/cg';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
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
              ceasar
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/affine">affine</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/reverse">reverse</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/transposition">transposition</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/simple-substitution">simple substitution</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/modulo">modulo operator</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/modular-inverse">modular inverse</NavLink>
          </NavItem>
        </ListLinks>
      </Wrap>
    </Container>
  );
};

export default Sidebar;
