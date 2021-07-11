import { useUser } from '@auth0/nextjs-auth0';

import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import Head from "next/head";

// const axios = require('axios');

export default function StatusWrapper({children, status}) {

    const { user, error, isLoading } = useUser();

    const [currentUser, setCurrentUser] = useState(null);

    const isMounted = useRef(true);

    // only if mounted
    function getUser() {
        if(isMounted.current) {
            setCurrentUser(user);
        }
    }

    useEffect(() => {
        getUser();// make sure it unmounts
        return () => {
            isMounted.current = false;
        }
    }, []);

    if (user) {
        const userStatus = true;
        return (
            <>
                {status
                    ?
                    <Logged><div>You are logged in as {user.nickname} and the site is online [<a href='/api/auth/logout'>logout</a>]</div></Logged>
                    :
                    <Logged><div>You are logged in as {user.nickname} but the site is offline! [<a href='/api/auth/logout'>logout</a>]</div></Logged>
                }
                {React.cloneElement(children, {userStatus})}
            </>

        )
    } else if(status !== null) {
        const userStatus = false;
        return (
            <>
                {React.cloneElement(children, {userStatus})}
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
  text-align: center;
  color: red;
`;
