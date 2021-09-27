import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Header.css'

function Header(){

    return(
        <Navbar bg="dark" expand="lg">
  <Container>
  
    <Navbar.Brand ><Link className="nav-link" to="/"><img className="header-pic" src="https://www.thecompassforsbc.org/sites/default/files/COVID-19%20icon%202FINAL.png"></img>
    <span className="main-title">CoviFeed</span></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Link className="nav-link" to="/covid"><span className="header-first">Covid-19</span></Link>
        <Link className="nav-link" to="/india"><span className="header-first">India</span></Link>
        <Link className="nav-link" to="/world"><span className="header-first" >World</span></Link>
        
        
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header;