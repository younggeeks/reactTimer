import React from 'react'
import Nav from './Nav.jsx';

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="container">
                <Nav/>
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;