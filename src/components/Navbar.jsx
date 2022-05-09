import {
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Collapse,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from 'reactstrap';
import './Navbar.css'
function NavbarComponent() {
  return (
    <div>
      <Navbar
        color="dark"
        dark
        expand="md"
        fixed="top"
         >
        <NavbarBrand href="/">
          BloodBank
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar >
            <NavItem>
              <NavLink href="/">
                ABOUT US
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav >
              <DropdownToggle
                nav>
                LOOKING FOR BLOOD
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                 OPT1
                </DropdownItem>
                <DropdownItem>
                  OPT2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown
              inNavbar
              nav >
              <DropdownToggle
                nav>
                WANT TO DONATE
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  OPT1
                </DropdownItem>
                <DropdownItem>
                  OPT2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            <NavLink href="/">
                LOGIN
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarComponent