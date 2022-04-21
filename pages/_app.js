import StatusWrapper from '../components/status-wrapper';

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
          <StatusWrapper status={status}>
            <Component {...pageProps} status={status} />
          </StatusWrapper>
    );
}

MyApp.getInitialProps = async (ctx) => {

    const pageProps = await App.getInitialProps(ctx);
    // const url = process.env.DB_API + '/api/v1/status';
    // const token = await getAccessToken();
    // const result = await mydogspiesApiQuery(url, 'GET', token);
    // const status = result.online;
    const status = true;
    return {...pageProps, status};
};

export default wrapper.withRedux(MyApp);
