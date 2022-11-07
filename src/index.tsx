import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let posts = [
    {id: 1, message: 'Hi', likesCount: 10},
    {id: 2, message: 'How a u', likesCount: 16},
    {id: 3, message: 'Good', likesCount: 18},
    {id: 4, message: 'and u', likesCount: 19},
    {id: 5, message: 'Bye', likesCount: 20},
]
let dialogs = [
    {id: 1, name: 'Ksu'},
    {id: 2, name: 'Kate'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Masha'},
    {id: 5, name: 'Sasha'},
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How a u'},
    {id: 3, message: 'Good'},
    {id: 4, message: 'and u'},
    {id: 5, message: 'Bye'},
]
let all= { messages, dialogs}


ReactDOM.render(

    <App posts={posts}  all={all}/>,
  document.getElementById('root')

);