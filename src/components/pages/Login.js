import React, {Component} from 'react';
import Field from "./common/Field";
import "../../css/login.css"

const field = [
    {
        name:"UCSB Net ID",
        placeholder: "Your username"
    },
    {
        name:"Password",
        placeholder:"Your password"
    }
];

class Login extends Component{
    render(){
        return(
            <div className="login-container">
                <div className="login-form">
                    <form className="form-group">
                        {field.map((field, index) => {
                            return(<Field {...field} 
                                key={index}
                                onChange={this.props.onChange}
                                onBlur={this.props.onBlur}
                            />)
                        })}
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;