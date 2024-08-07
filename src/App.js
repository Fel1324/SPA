import React from 'react';
import './App.css';
import { ListaNomes } from './components/ListaNomes';

export function App() {
  const nomes = ['Matheus', 'Rafael', 'Rafaela', 'Pedro'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicação usando <span>React</span></h1>
      </header>

      <ListaNomes nomes={nomes}/>
    </div>
  );
}
