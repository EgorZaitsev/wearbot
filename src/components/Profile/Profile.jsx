import React from 'react';
import {useNavigate} from "react-router-dom";
import {useTelegram} from "../../hooks/useTelegram";


const Profile = () => {
    const {tg} = useTelegram()
    const navigation = useNavigate()
    const backNav = () => {
        navigation(-1);
        tg.BackButton.hide();
        tg.BackButton.offClick();
    }
    tg.BackButton.show();
    tg.BackButton.onClick(backNav);
    return (
        <div>
            <h2>profile info</h2>
            <p>{tg.initDataUnsafe.user}</p>
        </div>
    );
};

export default Profile;