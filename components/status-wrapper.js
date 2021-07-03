import {useUser} from '@auth0/nextjs-auth0';
import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import Head from "next/head";

const axios = require('axios');

export default function StatusWrapper({children, currentSite, currentOnlineStatus}) {

    const {user, error, isLoading} = useUser();
    // const [site, setSite] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    // const [onlineStatus, setOnlineStatus] = useState(null);
    const isMounted = useRef(true);



    // TODO move this to preload?
    // async function getSite() {
    //
    //     try {
    //         const response = await fetch('https://api.mydogspies.com:5011/api/v1/status');
    //         const res = response.json();
    //         setSite(res.online ? 'online' : 'offline');
    //         setOnlineStatus(res.online);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // only if mounted
    function getUser() {
        if(isMounted.current) {
            setCurrentUser(user);
        }
    }

    useEffect(() => {
        getUser();
        // getSite();
        // make sure it unmounts
        return () => {
            isMounted.current = false;
        }
    }, []);

    if (user) {
        return (
            <>
                {currentOnlineStatus
                    ?
                    <Logged><div>You are logged in as {user.name} and the site is {currentSite}</div></Logged>
                    :
                    <Logged><div>You are logged in as {user.name} but the site is {currentSite}!</div></Logged>

                }
                {React.cloneElement(children, {siteStatus: true})}
            </>

        )
    } else if(currentOnlineStatus !== null && !user) {
        return (
            <>
                {React.cloneElement(children, {siteStatus: currentOnlineStatus})}
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

export async function getStaticProps(context) {

    let currentSite;
    let currentOnlineStatus;

    try {
        const response = await fetch('https://api.mydogspies.com:5011/api/v1/status');
        const res = response.json();
        currentSite = res.online ? 'online' : 'offline';
        currentOnlineStatus = res.online;
    } catch (error) {
        console.log(error);
    }
    return {
        props: {currentSite, currentOnlineStatus}, // will be passed to the page component as props
    }
}

// TODO the styled below should be refactored to proper style for the logged info stripe

const Logged = styled.div`
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  color: red;
`;
