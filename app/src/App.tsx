import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { NotFound } from './components/NotFound/NotFound'
import PhilipsLights from './components/PhilipsLights/PhilipsLights'
import Sonos from './components/Sonos/Sonos'
import Footer from './components/Footer/Footer'
import './app.scss'

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/lights">
            <PhilipsLights />
          </Route>
          <Route exact path="/sonosplayers">
            <Sonos />
          </Route>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
