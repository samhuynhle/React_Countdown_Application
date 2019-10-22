import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// const myButton = React.createElement('button', null, 'Click me!');
// console.log(JSON.stringify(myButton));

// ReactDOM.render(myButton, document.getElementById('app'));

var myVar = setInterval(myTimer, 1000);
var counter = 100;

ReactDOM.render(counter, document.getElementById('app'));

function myTimer() {
    if (counter == 0){
        counter = 100;
    }
    counter -= 1;
    ReactDOM.render(counter, document.getElementById('app'));
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
