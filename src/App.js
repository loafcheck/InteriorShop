import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import interiorImg from './interior.png';
import bed1 from './bed1.png';
import bed2 from './bed2.png';
import bed3 from './bed3.png';


function App() {
  return (
    <div className="App">
    <>
      <Navbar className='Nav'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

    <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>

    <>
      <div className='main-bg' style={{background:`url(${interiorImg})`}}></div>
    </>

    <>
    <Container>
      <Row className='productRow'>
        <Col xs={4} className='product'>
          <img src={bed1} alt='product' />
        </Col>
        <Col xs={4} className='product'>
          <img src={bed2} alt='product' />
        </Col>
        <Col xs={4} className='product'>
          <img src={bed3} alt='product' />
        </Col>
      </Row>
    </Container>


    </>
    </div>
  );
}

export default App;
