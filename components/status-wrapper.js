import React, {useEffect, useRef, useState} from 'react';
import {BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import styled from 'styled-components';

// TODO to be used with a new auth and logged users
import OfflineHeader from './offline/offline-logged-header/offline-logged-header';


export default function StatusWrapper({children, status}) {


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
const SomeElement = styled.div`
    
`;
