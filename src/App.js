import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Searchbar from './containers/SearchBar/Searchbar';
import WeatherList from './containers/WeatherList/WeatherList';

class App extends Component {
  
  render() {
    return (
      <div className="App container">
        <Header></Header>
        <Searchbar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
