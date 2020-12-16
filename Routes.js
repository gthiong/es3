import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';

import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Settings from './containers/Settings';
import Search from './containers/Search';

import './App.css';
// import Navbar from './components/Navbar';
import CreateDashboard from './pages/CreateDashboard';
import Dashboards from './pages/Dashboards';
import DashboardTest1 from './pages/DashboardTest1';
import DashboardTest2 from './pages/DashboardTest2';
import Companies from './pages/Companies';
import Support from './pages/support';
import allgraphs from './pages/AllGraphs';
import DBHome from './pages/DBHome'

export default ({ childProps }) => (

	<Router>
		<Switch>
		<AppliedRoute path="/" exact component={Home} props={childProps} />
		<AppliedRoute path="/login" exact component={Login} props={childProps} />
		<AppliedRoute path='/DBHome' component={DBHome} props={childProps}/>
        <AppliedRoute path='/CreateDashboard' component={CreateDashboard} props={childProps}/>
        <AppliedRoute path='/Companies' component={Companies} props={childProps}/> 
		<AppliedRoute path='/support' component={Support} props={childProps}/>
		<AppliedRoute path='/Dashboards' component={Dashboards} props={childProps}/>
		<AppliedRoute path='/DashboardTest1' component={DashboardTest1} props={childProps}/>
		<AppliedRoute path='/DashboardTest2' component={DashboardTest2} props={childProps}/> 
		<AppliedRoute path='/AllGraphs' component={allgraphs} props={childProps}/> 
		<AppliedRoute path='/settings' exact component={Settings} props={childProps}/>
		<AppliedRoute path='/Search' exact component={Search} props={childProps}/>
		{/* Finally, catch all unmatched routes */}
		<Route component={NotFound} />
		</Switch>
	</Router>

);
