import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
        <Container >

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>

            <Nav className='container-fluid nav-list'>

              <LinkContainer to='/'>
                <Nav.Link className='active mx-2'>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/workoutsearch'>
                <Nav.Link className='mx-2'>Workout Search</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/about'>
                <Nav.Link className='mx-2'>About</Nav.Link>
              </LinkContainer>

              {/* <LinkContainer to='/profile'>
                <Nav.Link className='mx-2'>Profile</Nav.Link>
              </LinkContainer> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation