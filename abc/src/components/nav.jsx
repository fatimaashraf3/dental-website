import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mainlogo from '../images/logo-village-dental-v3.svg'
import '../App.css'

function BasicExample() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={mainlogo} height="100" width="300" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <br />
          <Nav className="nav">
            <Nav.Link href="#home" className='navcon'>Home</Nav.Link>
            <Nav.Link href="#link" className='navcon'>Link</Nav.Link>
            <Nav.Link href="#link" className='navcon'>Waranty</Nav.Link>
            <Nav.Link href="#link" className='navcon'>New patients</Nav.Link>
            <button className='nav-btn navcon'>BOOK ONLINE</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default BasicExample;