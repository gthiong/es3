// import { LinkContainer } from 'react-router-bootstrap';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
// import { NavItem } from 'react-bootstrap';
// import Navbar from './components/Navbar';
// import Routes from './Routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';

import { Auth } from 'aws-amplify';
import 'semantic-ui-css/semantic.min.css';
import './App.css'; 

import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Search from './containers/Search'

import CreateDashboard from './pages/CreateDashboard';
import Dashboards from './pages/Dashboards';
import DashboardTest1 from './pages/DashboardTest1';
import DashboardTest2 from './pages/DashboardTest2';
import Companies from './pages/Companies';
import Support from './pages/support';
import allgraphs from './pages/AllGraphs';
import DBHome from './pages/DBHome'


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuthenticated: false,
			isAuthenticating: true,
			user:{}
		};
	}

	async componentDidMount() {
		try {
			if (await Auth.currentSession()) {
				this.userHasAuthenticated(true);
			}
		} catch (e) {
			if (e !== 'No current user') {
				alert(e);
			}
		}

		this.setState({ isAuthenticating: false });
	}

	userHasAuthenticated = authenticated => {
		this.setState({ isAuthenticated: authenticated });
	};

	render() {
		const childProps = {
			isAuthenticated: this.state.isAuthenticated,
			userHasAuthenticated: this.userHasAuthenticated
		};
		return (


			
		
			<Router>
					<Switch>
					<AppliedRoute excat path="/" exact component={Home} props={childProps} />
					<AppliedRoute excat path="/login" exact component={Login} props={childProps} />
					<AppliedRoute excat path='/DBHome' component={DBHome} props={childProps}/>
                    <AppliedRoute excat path='/search' component={Search} props={childProps}/>
					<AppliedRoute excat path='/Companies' component={Companies} props={childProps}/> 
					<AppliedRoute excat path='/support' component={Support} props={childProps}/>
					<AppliedRoute excat path='/Dashboards' component={Dashboards} props={childProps}/>
					<AppliedRoute excat path='/DashboardTest1' component={DashboardTest1} props={childProps}/>
					<AppliedRoute excat path='/DashboardTest2' component={DashboardTest2} props={childProps}/>
					<AppliedRoute excat path='/AllGraphs' component={allgraphs} props={childProps}/> 
					{/* Finally, catch all unmatched routes */}
					<Route component={NotFound} />
					</Switch>
			</Router>
		);
	}
}

export default withRouter(App);
