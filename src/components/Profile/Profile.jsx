import React, {useEffect} from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import {BackButton} from "@twa.js/sdk";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const backbutton = new BackButton('6.8')
    const tg = useTelegram()
    const navigation = useNavigate()
    useEffect(() => {
        backbutton.show()
        backbutton.on('click', () => {
            navigation(-1);
        })
    })

    return (
        <div>
            <h2>profile info</h2>
            <p>{tg.initDataUnsafe?.user}</p>
        </div>
    );
};

export default Profile;