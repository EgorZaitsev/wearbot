import './App.css';
import Header from'./components/Header'
import Profile from "./components/Profile/Profile";
import "./components/Header.css"
import {Route, Routes} from "react-router-dom";
import React from 'react';


const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path='/profile' element={<Profile  />} />
            </Routes>
        </>
    );
};

export default App;
