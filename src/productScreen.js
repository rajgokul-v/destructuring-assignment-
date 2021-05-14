import React from 'react'
import products from './product'

const productScreen = ({ match }) => {
	const product = products.find((p) => p._id === match.params._id)
	console.log(product)

	return <div>{product.name}</div>
}

export default productScreen
