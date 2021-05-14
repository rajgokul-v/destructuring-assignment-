import React from 'react'
import { Container, Dropdown } from 'react-bootstrap'
import products from './product'
import Header from './components/Header'
import Footer from './components/Footer'

const HomeScreen = () => {
	return (
		<>
			<Header />
			<Container>
				<main className="py-3 " style={{ minHeight: '100vh' }}>
					{products.map((product) => (
						<Container
							className="d-flex align-items-left ml-3"
							style={{ minHeight: '10vh' }}
						>
							<Dropdown>
								<Dropdown.Toggle variant="success" id="dropdown-basic">
									Roll no:{product._id}
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="/">{product.name}</Dropdown.Item>
									<Dropdown.Item href="#/action-2">{product.age}</Dropdown.Item>
									<Dropdown.Item href="#/action-3">
										{product.className}
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Container>
					))}
				</main>
			</Container>

			<Footer className="align-items-end" style={{ minHeight: '100vh' }} />
		</>
	)
}

export default HomeScreen
