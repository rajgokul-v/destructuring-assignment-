import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Form, Container } from 'react-bootstrap'

const Signup = () => {
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()

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
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Form.Group id="password-confrimation">
							<Form.Label>Password Confirm</Form.Label>
							<Form.Control type="password" ref={passwordConfirmRef} required />
						</Form.Group>
					</Form>
					<Button type="submit" className="w-100 mt-3 ">
						sign Up
					</Button>
				</Card.Body>
				<div className="w-100 text-center" style={{ minWidth: '100vh' }}>
					already have an account?<Link to="/signin">Sign in</Link>
				</div>
			</Card>
		</Container>
	)
}

export default Signup
