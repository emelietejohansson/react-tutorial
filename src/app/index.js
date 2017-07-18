var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <h1>Hello</h1>
        );
    }
});


// Put component into HTML page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
