import React from 'react'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = ({ component: Component, isLoggedin, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return isLoggedin ? <Component {...props} /> : <Redirect to="/Signin" />
			}}
		/>
	)
}

export default ProtectedRoute
