import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';



const AppTitle = "Welcome to MatheusApp"
const AppDescription = "Creating UI with components is awesome"

const SidebarTitle = "This is my sidebar title"
const SidebarDescription = "This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “functional” because they are literally JavaScript functions."

const FooterTitle = "This is my footer description"
const FooterDescription = SidebarDescription


class App extends Component {

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('mounted');
  }

  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="App">
        <Header title={AppTitle} description={AppDescription} />

        <div className="container">
        
        <Main title="This is my main content title" body="and this is my main content body of text"/>
        
         
        <Sidebar title={SidebarTitle} body={SidebarDescription}/> 
            
        </div>
        <Footer title={FooterTitle} body={FooterDescription}/>
      </div>
    );
  }
}

class Header extends Component {

  render() {

    const {title, description } = this.props;

    return (
      <header className="Header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Header-title">{this.props.title}</h1>
          <p className="Header-description">{ this.props.description }</p>
          <Clock date={new Date()} />  
      </header>

    );
  }
}

class Main extends Component {


  render() {
    return (
      <main className="MainContent"> 
          <h1 className="MainContent-title">{this.props.title}</h1>
          <p className="MainContent-body">
          {SidebarDescription}
         </p>
         
      </main>
    );
  }
}

class Sidebar extends Component {


  render() {

    const { title, body } =  this.props;

    return (

      <aside className="Sidebar"> 
          <h3 className="Sidebar-title">{this.props.title}</h3>
          <p className="Sidebar-body">
          {this.props.body}
         </p>
         <Button text="Show/Hide sidebar" onClick={this.toggle} />
      </aside>
      
    );
  }
}

class Footer extends Component {
  render() {

    const { title, body } =  this.props;

    return (
      <footer className="Footer"> 
          <h3 className="footer-title">{this.props.title}</h3>
          <p>{this.props.body}</p>
          <ul className="footer-links">
            <li>1</li>
            <li>2</li>
            <li>3</li>
         </ul>
      </footer>
    );
  }
}

class Button extends Component {

  render() {
    const { text } =  this.props;
    return (
      <button type="button" onClick={this.toggle} className="Button">{text}</button>
    );
  }
}

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
 