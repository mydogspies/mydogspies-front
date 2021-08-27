import {useUser} from '@auth0/nextjs-auth0';
import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

import OfflineHeader from './offline/offline-logged-header/offline-logged-header';
import IconMenuNavigate from '../components/navigation/icon_menu_navigate/icon_menu_navigate';
import IconAboutNavigate from './navigation/icon_menu_about/icon_menu_about';
import IconHomeNavigate from './navigation/icone_menu_home/icon_menu_home';

import PullOutMenu from './pullout_menu/pull_out_menu';
import AboutOverlay from './about/about_overlay';

export default function StatusWrapper({children, status}) {

    // user related states
    const {user, error, isLoading} = useUser();
    const [currentUser, setCurrentUser] = useState(null);
    const isMounted = useRef(true);

    // pull out menu and about overlay related states
    const [panelOpen, setPanelOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [menuFill, setMenuFill] = useState(false);
    const [aboutFill, setAboutFill] = useState(false);

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

    // handle navigation icons
    //
    function handleMenuClick() {
        if (panelOpen) {
            setPanelOpen(false);
            setMenuFill(null);
        } else {
            setPanelOpen(true);
            setMenuFill(true);
        }
    }

    function handleAboutClick() {
        if (aboutOpen) {
            setAboutOpen(false);
            setAboutFill(null);
        } else {
            setAboutOpen(true);
            setAboutFill(true);
        }
    }

    // render component code below only
    //

    // if a dev user is logged in
    if (user) {
        const userStatus = true;
        return (
            <>
                {panelOpen ? (
                    <MenuContainer>
                        <PullOutMenu addClass="global-box-shadow"/>
                    </MenuContainer>
                ) : null}
                {aboutOpen ? (
                    <AboutContainer>
                        <AboutOverlay addClass="global-box-shadow"/>
                    </AboutContainer>
                ) : null}
                <IconHomeNavigate/>
                <div onClick={handleAboutClick}><IconAboutNavigate fillOverride={aboutFill}/></div>
                <div onClick={handleMenuClick}><IconMenuNavigate fillOverride={menuFill}/></div>
                <OfflineHeader/>
                {React.cloneElement(children, {userStatus})}
            </>
        )

        // if site is offline and no users logged in
    } else if (status === false) {
        const userStatus = false;
        return (
            <>
                {React.cloneElement(children, {userStatus})}
            </>
        )

        // TODO clean up the re-occurring code for site logged in and normal site

    } else {
        // normal site
        const userStatus = false;
        return (
            <>
                {panelOpen ? (
                    <MenuContainer>
                        <PullOutMenu/>
                    </MenuContainer>
                ) : null}
                {aboutOpen ? (
                    <AboutContainer>
                        <AboutOverlay/>
                    </AboutContainer>
                ) : null}
                <IconHomeNavigate/>
                <div onClick={handleAboutClick}><IconAboutNavigate fillOverride={aboutFill}/></div>
                <div onClick={handleMenuClick}><IconMenuNavigate fillOverride={menuFill}/></div>
                <IconMenuNavigate/>
                {React.cloneElement(children, {userStatus})}
            </>
        )
    }
}

const MenuContainer = styled.div`
  position: fixed;
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

const AboutContainer = styled.div`
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  @keyframes openOverlay {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  animation: openOverlay .32s cubic-bezier(0, 0, 0.5, 1.0);
`;

