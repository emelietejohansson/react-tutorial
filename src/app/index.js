var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var TodoComponent = React.createClass({
    render: function(){
        return(
            <div>
                <p><strong>Chocolate name: </strong>{ this.props.chocolate.name}</p>
                <p><strong>Chocolate flavour: </strong>{ this.props.chocolate.flavour }</p>
                <p><strong>Chocolate price: </strong>{ this.props.chocolate.price }</p>
            </div>
        );
    }
});

var myChocolate = { name: 'Marabou', flavour: 'Mint', price: '15.00'}

// Put component into HTML page
ReactDOM.render(<TodoComponent msg = "I like chocolate" chocolate = { myChocolate } />, document.getElementById('todo-wrapper'));
