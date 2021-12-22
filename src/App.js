import React, { Component } from 'react'
import 'bootstrap'
import {APP_NAME} from './Lib/Constant'
import 'react-pro-sidebar/dist/css/styles.css';
import './Assets/Css/App.css';
import './Assets/Css/Responsive.css';
import Routers from './Lib/Routers';

export class App extends Component {

  componentDidMount(){
    document.title = APP_NAME + ' - Free React Dashboard Template'
  }

  render() {
    return (
      <Routers />
    )
  }
}

export default App
