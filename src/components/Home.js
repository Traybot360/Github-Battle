import React from 'react';
var Link = require('react-router-dom').Link;

class Home extends React.Component{
  render(){
    return (
            <div className="home-container">
                <h1>Github Battle: Battle Your Friends... and stuff</h1>
                <Link className="button" to='/battle'>Battle</Link>
            </div>
        );
    }
}
export default Home; 