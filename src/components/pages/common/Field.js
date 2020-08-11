import React, {Component} from 'react';
import "../../../css/login.css"

class Field extends Component{
    render(){
        return(
            <div className="form-group">
                <div className="row">
                    <h1>{this.props.name}</h1>
                </div>
                <input className="form-control"
                    id={this.props.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    required="required"
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
            </div>
        );
    }
}

export default Field;