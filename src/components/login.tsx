import {Component, SyntheticEvent} from 'react';
import { AuthService } from '../services/authService';

//interfaces
interface LoginProps {
    authService: AuthService
}
interface CustomEvent {
    target: HTMLInputElement
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

    private setuserName(e: CustomEvent){
        this.setState({userName: e.target.value})
    }
    private setPassword(e: CustomEvent){
        this.setState({password: e.target.value})
    }
    private async handleSubmit(e: SyntheticEvent){
        e.preventDefault()
        const result = await this.props.authService.login(
            this.state.userName,
            this.state.password
        )
        result ? console.log(result) : console.error();
    }
    render(){
        return(
            <div>
                <h1>Please login</h1>

                <form onSubmit={e => this.handleSubmit(e)}>
                    <input 
                        type="text" 
                        onChange={e => this.setuserName(e)} 
                        value={this.state.userName}
                    /><br />
                    <input 
                        type="password" 
                        onChange={e => this.setPassword(e)} 
                        value={this.state.password} 
                    /><br />
                    <input type="submit" value="login" />
                </form>

            </div>
        );
    }
}