import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AtomiProvider } from './atomiQL/atomiContext';
import { thing } from 'typescript-package'

const url = 'https://graphql-pokemon2.vercel.app';

function NewComponent() {
  const data = thing(1)
  return <div>{data}</div>
}

ReactDOM.render(
  <React.StrictMode>
    <AtomiProvider url={url}>
      <App />
    </AtomiProvider>
    <NewComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
