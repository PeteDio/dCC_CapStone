import React, {Component} from 'react';
import './Login.scss';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',            
            password:''
        }
    }
    

    render(){
        return ( 
            <div className="loginForm">
                <div className="login">
                    <input type="text" name="username" placeholder="Enter UserName"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button type="submit"  >Submit</button>
                </div>
            </div>

        );
    }
}
 
export default Login;
