import React, {Component, Fragment} from 'react';
import './App.css';
import {Container} from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import {Route, Switch} from "react-router-dom";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import HomePage from "../../features/home/HomePage";

class App extends Component {
  render() {
    return (
      <Fragment>
          <Switch>
              <Route exact path='/' component={HomePage}/>
          </Switch>
          <Route path='/(.+)' render={() => (
              <Fragment>
                  <NavBar/>
                  <Container className="main">
                      <Route path='/events' component={EventDashboard}/>
                      <Route path='/event/:id' component={EventDetailedPage}/>
                      <Route path='/people' component={PeopleDashboard}/>
                      <Route path='/profile/:id' component={EventDashboard}/>
                      <Route path='/settings' component={SettingsDashboard}/>
                      <Route path='/createEvent' component={EventForm}/>
                  </Container>
              </Fragment>
          )}/>
      </Fragment>
    );
  }
}

export default App;
