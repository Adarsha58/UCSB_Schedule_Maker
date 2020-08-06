import React, {Component} from 'react';
import "../css/main.css"

class PageWrapper extends Component{
    render(){
        return(
            <div className="nav-Container">
                <h1>UCSB Schedule Maker</h1>
                {this.props.children}
            </div>
        );
    }
}

export default PageWrapper;