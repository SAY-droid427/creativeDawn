import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import HobbyIcon from '../assets/painting.jpg';
import LogoutIcon from '../assets/logout.png';

const SideBar = () => (
    <div>
        <div>
            <div>
                <img src = {HobbyIcon} width="30" />
            </div>
        </div>
        <div>
            <div>
                <img src = {LogoutIcon} width="30" />
            </div>
        </div>
    </div>
)

const ChannelListContainer = () =>{
    return (
        <div>
            <SideBar />
        </div>
    )
}

export default ChannelListContainer;
