var React = require('react');

import { Link } from 'react-router-dom'

var About = React.createClass({
    render: function(){
        return(
            <div>
                <h2>All about me</h2>
                <Link to={"/"}>Home</Link>
            </div>
        );
    }
});

module.exports = About;
