import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Card, Form, Button } from 'react-bootstrap'

const Signin = () => {
	return (
		<Container
			className="d-flex align-items-center justify-content-center"
			style={{ minHeight: '100vh' }}
		>
			<Card className="mb-4">
				<Card.Body className="align">
					<Form>
						<h3 className="text-center ">Sign Up</h3>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" required />
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" required />
						</Form.Group>
					</Form>
					<Button type="submit" className="w-100 mt-3 ">
						Sign In
					</Button>
				</Card.Body>
				<div className="w-100 text-center" style={{ minWidth: '100vh' }}>
					Don't have an account?<Link to="/signup">Sign Up</Link>
				</div>
			</Card>
		</Container>
	)
}

export default Signin
