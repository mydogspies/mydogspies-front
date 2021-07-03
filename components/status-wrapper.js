import {useUser} from '@auth0/nextjs-auth0';
import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import Head from "next/head";

const axios = require('axios');

export default function StatusWrapper({children, status}) {

    const {user, error, isLoading} = useUser();
    // const [site, setSite] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [onlineStatus, setOnlineStatus] = useState(null);
    const isMounted = useRef(true);


    // only if mounted
    function getUser() {
        if(isMounted.current) {
            setCurrentUser(user);
        }
    }

    useEffect(() => {
        getUser();
        setOnlineStatus(status ? 'online' : 'offline');
        // make sure it unmounts
        return () => {
            isMounted.current = false;
        }
    }, []);

    if (user) {
        return (
            <>
                {status
                    ?
                    <Logged><div>You are logged in as {user.name} and the site is online</div></Logged>
                    :
                    <Logged><div>You are logged in as {user.name} but the site is offline!</div></Logged>

                }
                {React.cloneElement(children)}
            </>

        )
    } else if(status !== null && !user) {
        return (
            <>
                {React.cloneElement(children)}
            </>
        )
    } else {
        return (
            <div>
                <Head>
                    <title>Mydogspies.com - Coding, 3D and project management - Full stack development</title>
                </Head>
                <main>
                    <h1>Welcome to Mydogspies</h1>
                    <p>We will be back late summer 2021!</p>
                </main>
            </div>
        );
    }
}

// TODO the styled below should be refactored to proper style for the logged info stripe

const Logged = styled.div`
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  color: red;
`;
