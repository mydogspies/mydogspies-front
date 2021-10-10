import StatusWrapper from '../components/status-wrapper';
import mydogspiesApiQuery from '../middleware/backendApi/mydogspiesApiQuery';
import App, {AppProps, AppContext} from 'next/app';
import React, {Component} from 'react';
import {wrapper} from '../redux/store';

// import {useDispatch} from "react-redux";
// import {setToken} from '../redux/tokens/tokens.actions';
import '../styles/globals.scss';



function MyApp({Component, pageProps}: AppProps, status: any) {

    // const dispatch = useDispatch();

    return (
        <>
          <StatusWrapper status={status}>
            <Component {...pageProps} status={status} />
          </StatusWrapper>
        </>
    );
}

MyApp.getInitialProps = async (ctx: AppContext) => {

    const props = await App.getInitialProps(ctx);
    const url = process.env.DB_API + '/api/v1/status';
    const token = '1234abcd'; // TODO for dev only
    const result = await mydogspiesApiQuery(url, 'GET', token);
    const status = result.online;
    return {...props, status};
};

export default wrapper.withRedux(MyApp);
