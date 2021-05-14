import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
				<Container className="d-flex">
					<LinkContainer to="/">
						<Navbar.Brand>Object Destucture</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-2">
							<LinkContainer to="/logout">
								<Nav.Link>
									<i className="fas fa-shopping-cart"></i>Log Out
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/signin">
								<Nav.Link>
									<i className="fas fa-user"></i>Sign In
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
