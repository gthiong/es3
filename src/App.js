import React, { Component } from 'react';
import './App.css';
import { Barchart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart } from 'recharts';

const data1 = [
  {
    name: 'Oil & Gas', Yes: 87, No: 13,
  },
  {
    name: 'Energy Utilities', Yes: 31, No: 69,
  },
  {
    name: 'All', Yes: 59, No: 41,
  },
];

const data = [
  {
    ID: 1,
    Name: 'Carbons content in the atmosphere'
  },
  {
    ID: 2,
    Name: 'Emissions 2020 global report'
  },
  {
    ID: 3,
    Name: 'Oilsands in Alberta'
  },
  {
    ID: 4,
    Name: 'Texas US Oil companies'
  },
  {
    ID: 5,
    Name: 'Saudi Arabia oil drop'
  },
  {
    ID: 6,
    Name: 'Global warming impacts'
  },
  {
    ID: 7,
    Name: 'Environmental concerns'
  },
  {
    ID: 8,
    Name: 'Backdown in the making'
  },
  {
    ID: 9,
    Name: 'Willows are in the room'
  },
  {
    ID: 10,
    Name: 'Missions accomplished'
  }
]

function searchFor(term) {
  return function(x) {
    return x.Name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: data, term: '',
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
    this.setState({term: event.target.value})
  }
  render() {
    const {term, data} = this.state;
    return (
      <div>
        <Header/>
        <form className="form">
          <form className="form1">
          <input
          placeholder="Search"
          type="text"
          onChange={this.searchHandler}
          value={term} />
          </form>
        </form>
        <Graph/>
        {
          data.filter(searchFor(term)).map(graph =>
            <div key={graph.ID}>
              <h1>{graph.Name}</h1>
            </div>
            )
        }
      </div>
    )}
  };

class Header extends React.Component {
  render() {
    return (
      <div className="App-header"><h2>Welcome to ES3 Project</h2></div>
    )}
  };

class Graph extends React.Component {
  render() {
    return (
      <BarChart
        width={700}
        height={400}
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

export default App;