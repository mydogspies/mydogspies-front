import { UserProvider } from '@auth0/nextjs-auth0';
import StatusWrapper from '../components/status-wrapper';
import getAccessToken from '../middleware/backendApi/oktaAccessToken';
import mydogspiesApiQuery from '../middleware/backendApi/mydogspiesApiQuery';

import {useDispatch} from "react-redux";
import React, {useEffect} from 'react';
import {setToken} from '../redux/tokens/tokens.actions';
import {wrapper} from '../redux/store';

import '../styles/globals.scss';
import App from 'next/app';

function MyApp({Component, pageProps, status, token}) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setToken(token));
    }, [token]);

    return (
        <UserProvider>
          <StatusWrapper status={status}>
            <Component {...pageProps} status={status} />
          </StatusWrapper>
        </UserProvider>
    );
}

MyApp.getInitialProps = async (ctx) => {

    const pageProps = await App.getInitialProps(ctx);
    const url = process.env.DB_API + '/api/v1/status';
    const token = await getAccessToken();
    const result = await mydogspiesApiQuery(url, 'GET', token);
    const status = result.online;
    return {...pageProps, status, token};
};

export default wrapper.withRedux(MyApp);
