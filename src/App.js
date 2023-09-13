import './App.css';
import Header from'./components/Header'
import Profile from "./components/Profile/Profile";
import "./components/Header.css"
import {Route, Routes} from "react-router-dom";
import React from 'react';
import {useTelegram} from "./hooks/useTelegram";
import {useNavigate} from "react-router-dom";


const App = () => {
    const navigation = useNavigate();
    const tg = useTelegram();

    document.addEventListener('popstate', (e) => {
        tg.BackButton.show();
        tg.BackButton.onClick(() => {
            navigation(-1);
        })
    })

    return (
        <>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </>
    );
};

export default App;
