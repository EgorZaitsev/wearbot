import React from 'react';
import {useNavigate} from "react-router-dom";


const Profile = () => {
    const navigation = useNavigate()
    const backNav = () => {
        navigation(-1);
    }
    window.Telegram.WebApp.BackButton.show();
    window.Telegram.WebApp.BackButton.onClick(backNav);

    return (
        <div>
            <h2>profile info</h2>
            <button onClick={backNav}>aboba</button>
            <p>help me</p>
        </div>
    );
};

export default Profile;