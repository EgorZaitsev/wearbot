import React, {useEffect} from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";
import {useBackButton} from "@twa.js/sdk-react";


const Profile = () => {
    const tg = useTelegram();
    const navigation = useNavigate();
    const backButton = useBackButton();


    useEffect(() => {

        backButton.on('click', () => {
            navigation(-1);
        })
        backButton.show();

        return () => {
            backButton.off('click', () => {
                console.log('alive');
            })
        }
        }, [backButton, navigation])

    return (
        <div>
            <p>{tg.initDataUnsafe.user}</p>
        </div>
    );
};

export default Profile;