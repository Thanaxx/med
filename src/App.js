import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navigation';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Profile from './pages/Profile';
import News from './pages/News';
import Service from './pages/Service';
import Messages from './components/Message';
import Form from './components/Form';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Messages />
        <Switch>

          <Route path="/" exact component={LandingPage} />
          <Route path="/about" exact component={About} />
          <Route path="/doctor" exact component={Doctors} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/news" exact component={News} />
          <Route path="/services" exact component={Service}/>
          <Route path="/form" exact component={Form}/>
          
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;
