import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {Header} from "../Header";
import {Map} from "../Map";
import {Profile} from "../Profile";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'map'
    }
  }

  renderPage = (page) => {
    switch (page) {
      case 'map':
      default:
        return <Map/>;
      case 'profile':
        return <Profile/>;
    }
  };

  changePage = (page) => {
    this.setState({page})
  };

  render() {
    const {page} = this.state;

    return (
      <div className="App">
        <Header changePage={this.changePage} />
        {this.renderPage(page)}
      </div>
    );
  }
}

export default App;
