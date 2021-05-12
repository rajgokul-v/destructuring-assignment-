import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Signin from './components/user/Signin'
import Signup from './components/user/Signup'

function App() {
	return (
		<Router>
			<Switch>
				<ProtectedRoute
					isLoggedin={true}
					exact
					path="/"
					component={() => (
						<Dashboard name="gokul" age={18} number={[1, 2, 3, 4, 5]} />
					)}
				/>

				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={Signup} />
			</Switch>
		</Router>
	)
}
export default App
