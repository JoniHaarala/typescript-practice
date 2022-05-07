import {Component} from 'react';
import { AuthService } from '../services/authService';

//interfaces
interface LoginProps {
    authService: AuthService
}

interface LoginState{
    userName: string,
    password: string,
    loginAttempt: boolean,
    isSuccesfull: boolean
}

export class Login extends Component <LoginProps, LoginState>{

    state: LoginState = {
        userName: '',
        password: '',
        loginAttempt: false,
        isSuccesfull: false
    };

    render(){
        return(
            <div>
                <h1>Please login</h1>
                <form action="post">
                    <input type="text" value={this.state.userName}/><br />
                    <input type="password" value={this.state.password} /><br />
                    <input type="submit" value="login" />
                    
                </form>
            </div>
        );
    }
}