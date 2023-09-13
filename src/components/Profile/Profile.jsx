import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";

const Profile = () => {
    const tg = useTelegram()

    return (

        <div>
            {tg.initDataUnsafe.user.first_name}
        </div>
    );
};

export default Profile;