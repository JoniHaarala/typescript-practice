import { User } from "../models/user";

export class AuthService {

    public async login (userName:string, password:string)
    : Promise<User|undefined>{
        if (userName === 'user' && password === '1234') {
            return{
                name: userName,
                email:'algo@gmail.com'
            }
        } 
        else {
            return undefined;
        }
    }
}