import './App.css';
import Header from'./components/Header'
import "./components/Header.css"
import React from 'react';

const tg = window.Telegram.WebApp

const App = () => {
  return (
      <>
        <p>{tg.initData}</p>
        <Header />
      </>
  );
};

export default App;
