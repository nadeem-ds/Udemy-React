import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App'
import 'bootstrap/dist/css/bootstrap.css'

//const element = <h1>hello world</h1>
//in real world senario we render the whole app content instead of single element

ReactDom.render(<App/>, document.getElementById("root"))