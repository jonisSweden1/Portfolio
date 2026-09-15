import "./App.css"
import logo from './Logo_portfolio.png'
import { Nav, NavItem, NavbarBrand, Navbar, NavLink } from "react-bootstrap"

export const App = () => (
  <div className="App">
      <header style={{backgroundColor: 'gray'}}>
        <Navbar style={{display: 'flex', flexDirection: 'row'}}>
          <NavbarBrand href="#">
            <img src={logo} style={{backgroundColor: 'lightgray'}}/>
          </NavbarBrand>

          <Nav style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <NavItem >
              <NavLink>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>DD</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        
      </header>
  </div>
)
