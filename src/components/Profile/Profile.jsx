import React, {useEffect} from 'react';
import {useTelegram} from "../../hooks/useTelegram";


const Profile = () => {
 const tg = useTelegram()
    useEffect(() => {

        tg.backButton.show();
    })

    return (
        <div>
            <h2>profile info</h2>
            <p>{tg.initDataUnsafe?.user}</p>
        </div>
    );
};

export default Profile;