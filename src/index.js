import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber() {
    return Math.floor(Math.random()*1000)
}

function luckyNumber() {
    return Math.floor(Math.random()*1000)+1;
}

var randomNumber = luckyNumber();

var person = {
    name: 'James',
    luckyNumber: luckyNumber()

}

// person.name = 'James';
// person.luckyNumber = luckyNumber();

function greeting(obj) {
    return (
        <div className="container">
            <h1>Welcome {obj.name}</h1>
            <h2 className="text-muted">Your lucky number is: {obj.luckyNumber}</h2>
        </div>
    )
}

ReactDOM.render(
    // <h1 className="container">React Prototypes!</h1>,
    greeting(person),
    document.getElementById('root')
);
