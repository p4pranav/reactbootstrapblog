import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeComponent from './components/HomeComponent.jsx';
import AboutComponent from './components/AboutComponent.jsx';
import ContactComponent from './components/ContactComponent.jsx';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/aboutus" component={AboutComponent} />
      <Route exact path="/contactus" component={ContactComponent}/>
    </Switch>
  );
}

export default App;
