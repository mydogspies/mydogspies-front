import {UserProvider} from '@auth0/nextjs-auth0';

import StatusWrapper from "../components/status-wrapper";

import '../styles/globals.scss';

function MyApp({Component, pageProps}) {

    return (
        <UserProvider>

          <StatusWrapper>
            <Component {...pageProps} />
          </StatusWrapper>

        </UserProvider>
    );
}

export default MyApp
