import React from 'react';
import './App.css';
import {User} from '../models/user'
import { AuthService } from '../services/authService';
import { Login } from './login';

interface AppState {
  user : User | undefined //user or undefined
}

export class App extends React.Component<{}, AppState>{
  
  private authService: AuthService = new AuthService();

  render(){
    return(
      <Login authService={this.authService}/>
    )
  }
}