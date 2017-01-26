import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';


const App = () => (
  <div>
    <Header />
    <p>The rest is up to you.</p>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
