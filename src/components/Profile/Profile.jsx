import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useTelegram} from "../../hooks/useTelegram";

const Profile = () => {
    const tg = useTelegram();
    const navigation = useNavigate()
    const backbutton = tg.backButton;

    useEffect(() => {
        backbutton.show();
    })

    const backNav = () => {
        navigation(-1);
    }

    return (
        <div>
            <h2>profile info</h2>
            <button onClick={backNav}>aboba</button>
            <p>help me</p>
        </div>
    );
};

export default Profile;