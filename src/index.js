// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

//const element = <h1>Hello, Platzi Badges!</h1>;
var name = "Hiram";
const jsx = <h1>Hola soy, {name}</h1>
const element = React.createElement('h1', {}, `Hola soy ${name}`);
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
<Badge 
    firstName='Hiram' 
    lastName='Montesillo' 
    avatarUrl="https://www.gravatar.com/avatar?d=identicon"
    jobTitle='Front Engineer' 
    twitter='Hmontesillo25'/>,
     container);
