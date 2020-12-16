import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import '../components/SidebarData'
import './Dashboard.css';
import './CreateDashboard.css'
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

class Dashboards extends React.Component {
    render() {
    	return (
    		<div>
    			<Navbar />
          <DropdownButton title="Choose your Dashboard">
            <Nav className="flex-column">
            <Dropdown.Item>
                <Link to="/DashboardTest1">Dashboard Test 1</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to="/DashboardTest2">Dashboard Test 2</Link>
            </Dropdown.Item>
            </Nav>
        </DropdownButton>		
			  </div>
    	);
    }
}

export default Dashboards;
