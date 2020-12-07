import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import MyResponsiveBar from './Allgraphs';
import { ResponsiveBar } from '@nivo/bar';

class dashboard extends React.Component {
    render() {
      return (
        <div>
            <ul>
                <h2>Client's Dashboard</h2>
            </ul>
            <scan>Lists of your chosen graphs</scan>
            <MyResponsiveBar />
        </div>
      )}
};

export default dashboard;