import React, {useEffect} from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const tg = useTelegram();
    const navigation = useNavigate();
    useEffect(() => {
        if(!tg.BackButton.isVisible) {
            tg.BackButton.show();
            tg.BackButton.onClick(() => {
                navigation(-1);
            })
        }
    })

    return (
        <div>
            <p>{tg.initDataUnsafe.user}</p>
        </div>
    );
};

export default Profile;