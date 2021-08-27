import {useUser} from '@auth0/nextjs-auth0';
import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";

import OfflineHeader from "./offline/offline-logged-header/offline-logged-header";
import IconMenuNavigate from '../components/navigation/icon_menu_navigate/icon_menu_navigate';
import IconAboutNavigate from "./navigation/icon_menu_about/icon_menu_about";
import IconHomeNavigate from "./navigation/icone_menu_home/icon_menu_home";
import PullOutMenu from "./navigation/icon_menu_navigate/pull_out_menu";

export default function StatusWrapper({children, status}) {

    const {user, error, isLoading} = useUser();
    const [currentUser, setCurrentUser] = useState(null);
    const isMounted = useRef(true);
    const [panelOpen, setPanelOpen] = useState(false);

    // only if mounted
    function getUser() {
        if (isMounted.current) {
            setCurrentUser(user);
        }
    }

    useEffect(() => {
        getUser();// make sure it unmounts
        return () => {
            isMounted.current = false;
        }
    }, []);

    function handleMenuClick() {
        panelOpen ? setPanelOpen(false) : setPanelOpen(true);
    }

    if (user) {
        const userStatus = true;
        return (
            <>
                {panelOpen ? (
                    <MenuContainer>
                        <PullOutMenu/>
                    </MenuContainer>
                ) : null}
                <IconHomeNavigate/>
                <IconAboutNavigate/>
                <div onClick={handleMenuClick}><IconMenuNavigate/></div>
                <OfflineHeader/>
                {React.cloneElement(children, {userStatus})}
            </>
        )
    } else if (status === false) {
        const userStatus = false;
        return (
            <>
                {React.cloneElement(children, {userStatus})}
            </>
        )
    } else {
        const userStatus = false;
        return (
            <>
                <IconMenuNavigate/>
                <IconAboutNavigate/>
                <IconMenuNavigate/>
                {React.cloneElement(children, {userStatus})}
            </>
        )
    }
}

const MenuContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 100px;
  right: 0;
  
  @keyframes openPanel {
    from {
      right: -300px;
    }
    to {
      right: 0;
    }
  }
  
  animation: openPanel .32s cubic-bezier(0, 0, 0.5, 1.0);
`;

// TODO the styled below should be refactored to proper style for the logged info stripe

const Logged = styled.div`
  text-align: center;
  color: red;
`;

