import React, {useEffect} from 'react';
import {BackButton} from "@twa.js/sdk";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const backbutton = new BackButton('6.8')
    const navigation = useNavigate()
    useEffect(() => {
        backbutton.show()
        backbutton.on('click',backNav)
    })

    const backNav = () => {
        navigation(-1);
    }

    return (
        <div>
            <h2>profile info</h2>
            <button onClick={backNav}>aboba</button>
            <p>{backbutton.supports('on')}</p>
        </div>
    );
};

export default Profile;