import './App.css';
import Header from'./components/Header'
import "./components/Header.css"
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import React from 'react';






const App = () => {
    const tg = useTelegram();

    return (
        <>
            <p>{tg.initData}</p>
            <Header/>
            <Routes>
                <Route index element={<App />} />
                <Route path={'profile'} element={ <Profile />} />
            </Routes>
        </>
    );
};

export default App;
