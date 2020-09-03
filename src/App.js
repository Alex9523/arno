import React from 'react';
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import About from './components/about/about'
import Authorization from './components/authorization/authorization'
import Main from './components/main/main'
import { Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <dav className="app-wraper__content">
            <Route path="/about" component={ About }/>
            <Route path="/authorization" component={ Authorization }/>
            <Route path="/main" component={ Main }/>
        </dav>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
