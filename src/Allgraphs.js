import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import One from './images/1.png';
import './App.css';
import { LineChart, Line, XAxis, YAxis, Area, CartesianGrid, Tooltip, Legend, BarChart, Bar, ComposedChart, ResponsiveContainer } from 'recharts';

const data1 = [{ name: 'Oil & Gas', Yes: 87, No: 13 }, { name: 'Energy Utilities', Yes: 31, No: 69 }, { name: 'All', Yes: 59, No: 41 }];
const data2 = [{year: '2018', Oil: 65, Energy: 23}, {year: '2017', Oil: 42, Energy: 90}, {year: '2016', Oil: 53, Energy: 13}, {year: '2015', Oil: 32, Energy: 10}];
const data3 = [{year: '2018', Oil: 65, Energy: 23}, {year: '2017', Oil: 42, Energy: 90}, {year: '2016', Oil: 53, Energy: 13}, {year: '2015', Oil: 32, Energy: 10}];
const data4 = [{name: 'Operational', Oil_Gas: 77, Energy_Utilities: 25, All: 51}, {name: 'Financial', Oil_Gas: 3, Energy_Utilities: 6, All:9}, {name: 'Other', Oil_Gas: 6, Energy_Utilities: 3, All: 5}, {name: 'N/I', Oil_Gas: 13, Energy_Utilities: 66, All:40}];
const data5 = [{name: 'Operational', Oil_Gas: 50, Energy_Utilities: 25, All: 51}, {name: 'Financial', Oil_Gas: 67, Energy_Utilities: 53, All:70}, {name: 'Other', Oil_Gas: 6, Energy_Utilities: 3, All: 5}, {name: 'N/I', Oil_Gas: 13, Energy_Utilities: 26, All:30}];

class Graph1 extends React.Component {
    render() {
      return (
        <BarChart
          width={400}
          height={300}
          data={data1}
          margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Yes" fill="#8884d8" />
          <Bar dataKey="No" fill="82ca9d" />
        </BarChart>
      );
    }
}

class Graph2 extends React.Component {
    render() {
      return (
        <LineChart
          width={400}
          height={300}
          data={data2}
          margin={{ top: 5, right: 30, left: 20, bottom: 5, }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Oil" stroke="#8884d8" activeDot={{ r: 8}} />
          <Line type="monotone" dataKey="Energy" stroke="82ca9d" activeDot={{ r: 3}}/>
        </LineChart>
      );
    }
}

class Graph3 extends React.Component {
    render() {
        return (
        <BarChart
            width={400}
            height={300}
            data={data3}
            margin={{ top: 20, right: 30, left: 20, bottom:5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Oil" stackId="a" fill="#8884d8" />
            <Bar dataKey="Energy" stackId="a" fill="82ca9d" />
        </BarChart>
        );
    }
}

class Graph4 extends React.Component {
    render() {
        return (
        <BarChart
            width={400}
            height={300}
            data={data4}
            margin={{ top: 20, right: 30, left: 20, bottom:5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Oil_Gas" fill="#8884d8" />
            <Bar dataKey="Energy_Utilities" fill="#82ca9d" />
            <Bar dataKey="All" fill="#ffc658" />
        </BarChart>
        );
    }
}

class Graph5 extends React.Component {
    render() {
        return (
        <div style={{ width: '100%', height: 320}}>
        <ResponsiveContainer>
        <ComposedChart
            width={400}
            height={300}
            data={data5}
            margin={{ top: 20, right: 20, left: 20, bottom:20 }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="All" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="Energy_Utilities" barSize={20} fill="#82ca9d" />
            <Line type="monotone" dataKey="All" stroke="#ffc658" />
        </ComposedChart>
        </ResponsiveContainer>
        </div>
        );
    }
}

const Allgraphs = (props) =>{
    return(
        <Grid>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Graph1 />
                </Grid.Column>
                <Grid.Column className="col2">
                    <Graph2 />
                </Grid.Column>
                <Grid.Column>
                    <Graph3 />
                </Grid.Column>
                <Grid.Column>
                    <Graph4 />
                </Grid.Column>
                <Grid.Column>
                    <Graph5 />
                </Grid.Column>
                <Grid.Column>
                    <Graph1 />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Allgraphs;