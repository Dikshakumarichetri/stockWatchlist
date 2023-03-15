import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* <Navbar.Brand href="#home">StockWebsite</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"
                    defaultActiveKey='/'      
                                   >
                        <Nav.Link  href="/">Home</Nav.Link>

                        <Nav.Link  href="/watch">Watchlist</Nav.Link>
                        {/* <Nav.Link href="#pricing">Sign Up</Nav.Link> */}

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;