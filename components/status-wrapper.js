import React, {useEffect, useRef, useState} from 'react';
import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import styled from 'styled-components';

import shapeColors from '/styles/shape_colors.module.scss';

// TODO to be used with a new auth and logged users
import OfflineHeader from './offline/offline-logged-header/offline-logged-header';

import IconMenuNavigate from '../components/navigation/icon_menu_navigate/icon_menu_navigate';
import IconAboutNavigate from './navigation/icon_menu_about/icon_menu_about';
import IconHomeNavigate from './navigation/icone_menu_home/icon_menu_home';

import AboutOverlay from './about/about_overlay';

export default function StatusWrapper({children, status}) {

    // get css background colors
    const css = {
        shapeColors: {
            ccColor: shapeColors.shapesColorCode,
            cvColor: shapeColors.shapesColorVisual,
            cpColor: shapeColors.shapesColorProject
        }
    }

    // TODO commented out code stays until we decide on new auth logic
    // user related states
    /*const {user, error, isLoading} = useUser();
    const [currentUser, setCurrentUser] = useState(null);
    const isMounted = useRef(true);*/

    // only if mounted
    /*function getUser() {
        if (isMounted.current) {
            setCurrentUser(user);
        }
    }

    useEffect(() => {
        getUser();// make sure it unmounts
        return () => {
            isMounted.current = false;
        }
    }, []);*/

    // pull out menu and about overlay related states
    const [panelOpen, setPanelOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [menuFill, setMenuFill] = useState(false);
    const [aboutFill, setAboutFill] = useState(false);

    // handle navigation icons
    //
    function handleMenuCloseClick() {
        if (panelOpen) {
            setPanelOpen(false);
            setMenuFill(null);
        } else {
            setPanelOpen(true);
            setMenuFill(true);
        }
    }

    function handleAboutCloseClick() {
        if (aboutOpen) {
            setAboutOpen(false);
            setAboutFill(null);
        } else {
            setAboutOpen(true);
            setAboutFill(true);
        }
    }

    // TODO passing userStatus for now just as a passive flag until new auth implemented
    const userStatus = false;

    /* site OFFLINE - then pass on and let each page below decide what to do */
    if (status === false) {
        const userStatus = false;
        return (
            <>
                {React.cloneElement(children, {userStatus})}
            </>
        )
    } else {
        /* site ONLINE - add navigation logic and pass on */
        return (
            <>
                <BrowserView>
                    {/*{panelOpen ? (
                        <MenuContainer backgroundColor={css.shapeColors.cpColor} addClass="global-box-shadow">
                            <MenuItemLink>

                            </MenuItemLink>
                            <MenuClose className="pull-out-menu">
                                <a href="#" onClick={handleMenuCloseClick} target="_self">
                                    <p className="menu-close global-text-shadow">close</p>
                                </a>
                            </MenuClose>
                        </MenuContainer>
                    ) : null}*/}

                    {aboutOpen ? (
                        <AboutContainer>
                            <AboutClose className="about-overlay">
                                <a href="#" onClick={handleAboutCloseClick} target="_self"><p
                                    className="about-close global-text-shadow">close</p></a>
                            </AboutClose>
                            <AboutOverlay addClass="global-box-shadow"/>
                        </AboutContainer>
                    ) : null}

                    <a href="/"><IconHomeNavigate/></a>

                    <div onClick={handleAboutCloseClick}><IconAboutNavigate fillOverride={aboutFill}/></div>
                    {/*<div onClick={handleMenuCloseClick}><IconMenuNavigate fillOverride={menuFill}/></div>*/}
                    {React.cloneElement(children, {userStatus})}
                </BrowserView>
                <MobileView>
                    {React.cloneElement(children, {userStatus})}
                </MobileView>
            </>
        )
    }
}

/* PULL OUT MENU */
const MenuContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 100px;
  right: 0;
  opacity: 0.95;
  height: 76vh;
  width: 300px;
  border-radius: 10px 0 0 10px;
  background-color: ${props => props.backgroundColor};
  
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

const MenuClose = styled.div`
  z-index: 21;
  position: absolute;
  left: 28px;
  top: 10px;
`;

const MenuItemLink = styled.div`
  z-index: 22;
  position: relative;
`;

/* ABOUT OVERLAY */
const AboutContainer = styled.div`
  position: fixed;
  z-index: 10;
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

const AboutClose = styled.div`
  z-index: 11;
  position: absolute;
  right: 28px;
  top: 10px;
`;
