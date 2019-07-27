import React, { Component } from 'react';
import Header from './components/layouts/Header'
import Footer from './components/layouts/footer'
import CTA from './components/layouts/cta'
import { Switch, Route , BrowserRouter } from 'react-router-dom'

import MainContent from './components/pages/main-content';
import Skills from './components/pages/skills'
import SkillDetail from './components/pages/skillDetail'
import Certifications from './components/pages/certifications'
import Jobs from './components/pages/jobs'

import './css/reskill.css';
class App extends Component{
    render(){
      return(
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={MainContent} />
              <Route path="/skills" component={Skills} />
              <Route path="/skill/:id" component={SkillDetail} />
              <Route path="/certifications" component={Certifications} />
              <Route path="/jobs" component={Jobs} />
            </Switch>
            <CTA />
            <Footer />
          </div>
        </BrowserRouter>
        
      )
    }
  }
export default App