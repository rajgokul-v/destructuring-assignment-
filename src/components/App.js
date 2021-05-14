import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import pageNotFound from './PageNotFound'
import HomeScreen from '../HomeScreen'
import productScreen from '../productScreen'

function App() {
	return (
		<Router>
			<Switch>
				<ProtectedRoute
					isLoggedin={true}
					exact
					path="/"
					component={HomeScreen}
				/>

				<Route path="/signup" component={Signup} />

				<Route path="/signin" component={Signin} />
				<Route path="/product" component={productScreen} />
				<Route path="*" component={pageNotFound} />
			</Switch>
		</Router>
	)
}
export default App
