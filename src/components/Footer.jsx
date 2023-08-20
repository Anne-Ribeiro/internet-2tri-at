import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home">CÃOsemDONO</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;