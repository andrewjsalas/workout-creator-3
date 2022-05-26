import { Navbar, Nav, Container } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => {
  return (
    <>
      <Navbar>
        <Container>

          <NavbarToggle aria-aria-controls='responsive-navbar-nav' />
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation