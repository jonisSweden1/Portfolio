import { Provider } from "react-redux"
import "./App.css"
import facebook_icon from './images/facebook-square-black-icon.svg'
import x_icon from './images/x-social-media-round-icon.svg'
import linkedIn_icon from './images/linkedin-square-icon.svg'
import github_icon from './images/github-icon.svg'
import { HomePage } from "./sides/Home"
import { AboutPage } from "./sides/About"
import { store } from "./app/store"
import { BrowserRouter, Link, Route, Routes } from "react-router"
import { Nav, NavItem, NavbarBrand, Navbar, NavLink } from "react-bootstrap"
import logo from './images/Logo_portfolio.png'

export const App = () => (
  <Provider store={store}>
    <BrowserRouter basename="jonis-portfolio">
      <Navbar>
          <NavbarBrand>
            <Link to="/">
            <img src={logo} id="websiteLogo" alt="website_logo"/>
            </Link>
          </NavbarBrand>

          <Nav id="navBarMiddleSection" className="text-white" >
            <NavItem >
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/featured">Featured</Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio">Portfolio</Link>
            </NavItem>
            <NavItem>
              <Link to="/blog">Blog</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>

          <Nav id="navBarRightSection">
            <NavItem>
              <NavLink href="">
                <img src={facebook_icon} alt="facebook_logo" width={50}/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <img src={x_icon} alt="x_logo" width={50}/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/jonathan-sandstr%C3%B6m-42586a398/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUB86gEyxTyqPrygw0ROkVw%3D%3D">
                <img src={linkedIn_icon} alt="linkedIn_logo" width={50}/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/jonisSweden1">
                <img src={github_icon} alt="github_logo" width={50}/>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
    </BrowserRouter>
  </Provider>
)
