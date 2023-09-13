import './App.css';
import Header from'./components/Header'
import "./components/Header.css"
import {useTelegram} from "./hooks/useTelegram";
import {Link, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import React from 'react';






const App = () => {
    const tg = useTelegram();

    return (
        <>
            <p>{tg.initData}</p>
            <Header/>
            <Link to='/profiles'>Профиль</Link>
            <Routes>
                <Route path='/profiles' element={<Profile />} />
            </Routes>
        </>
    );
};

export default App;
