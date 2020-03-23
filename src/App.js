import React from 'react';
import Map from './Map';
import 'leaflet/dist/leaflet.css';
import { ReactComponent as TableIcon } from './table.svg';
import { ReactComponent as MarkerIcon } from './markerIcon.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const landing = (
    <div className="Landing floatingCard">
      <div className="card mb-3">
        <h1 className="Landing-title">Quien Juega</h1>
        <div className="card-body">
          <h5 className="card-title">Busca jugadores cerca a ti</h5>
          <p className="card-text">U hospeda un evento en tus alrededores.</p>
          <footer className="Landing-footer">
            <a href="#" className="Landing-cta btn btn-primary">
              <MarkerIcon className="icon" />
              Busca mesas cerca a ti
            </a>
            <Link to="/create" className="Landing-cta btn btn-primary">
              <TableIcon className="icon" />
              Crea una mesa
            </Link>
          </footer>
        </div>
      </div>
    </div>
  )
  const createTable = (
    <div className="CreateTable floatingCard">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Selecciona el punto de encuentro</h5>
        </div>
      </div>
    </div>
  )


  return (
    <div className="App">
      <Router>
        <div className="Map"><Map /></div>
        <Switch>
          <Route path="/about">
          </Route>
          <Route path="/create">
            {createTable}
          </Route>
          <Route path="/">
            {landing}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
