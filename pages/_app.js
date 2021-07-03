import {UserProvider} from '@auth0/nextjs-auth0';

import StatusWrapper from "../components/status-wrapper";

import '../styles/globals.scss';
import App from "next/app";

function MyApp({Component, pageProps, status}) {

    return (
        <UserProvider>

          <StatusWrapper>
            <Component {...pageProps} status={status} />
          </StatusWrapper>

        </UserProvider>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    const status = await getSiteStatus();
    return {appProps, status};
};

// check if the on/offline flag is set in the db
async function getSiteStatus() {
    try {
        // const res = await fetch(process.env.DB_API + '/api/v1/status');
        const res = await fetch(process.env.DB_API + '/api/v1/status');
        const status = await res.json();
        return status.online;
    } catch (error) {
        console.log(error);
        return false;
    }
}


export default MyApp
