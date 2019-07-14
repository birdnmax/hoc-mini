import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SuperSecret from './components/SuperSecret';
import OnOffButton from './components/OnOffButton';
import AccordianMenu from './components/AccordianMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SuperSecret isAuthenticated={true}/>
        <OnOffButton/>
        <AccordianMenu>
          This is the Accordian Menu
        </AccordianMenu>
      </div>
    )
  }
}

export default App;
