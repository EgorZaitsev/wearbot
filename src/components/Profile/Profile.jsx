import React, {useEffect} from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import {BackButton} from "@twa.js/sdk";

const Profile = () => {
    const backbutton = new BackButton('6.8')
 const tg = useTelegram()
    useEffect(() => {

        backbutton.show()
    })

    return (
        <div>
            <h2>profile info</h2>
            <p>{tg.initDataUnsafe?.user}</p>
        </div>
    );
};

export default Profile;