import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './includes/bootstrap';
import {BrowserRouter} from 'react-router-dom'
import '@fortawesome/fontawesome-free/js/all';

ReactDOM.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    
  
  document.getElementById('root')
);


