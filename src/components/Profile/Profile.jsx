import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Profile = () => {
    const tg = useTelegram();

    return (
        <div>
            <p>{tg.initDataUnsafe.user}</p>
        </div>
    );
};

export default Profile;