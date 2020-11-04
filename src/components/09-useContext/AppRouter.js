import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { NavBar } from './NavBar'; //Importamos el NavBar

//Rutas
import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomeScreen}/>
                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen }/>
                        <Route component={ HomeScreen } />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
