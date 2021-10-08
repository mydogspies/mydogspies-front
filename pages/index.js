import Head from 'next/head';
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';
import styled from "styled-components";

import OfflinePage from '../components/offline/site-offline-component/site-offline-component';
import IndexTop from '../components/index/index_top/index_top';

import Footer from '../components/license_footer/license_footer'


export default function Home({status, userStatus}) {

    if (status || userStatus) {
        return (
            <>
                <BrowserView>
                    <Head>
                        <title>Mydogspies.com - Coding, 3D and project management - Full stack development</title>
                    </Head>
                    <ParentContainer id="parent-container">
                        <IndexTop />
                        <Footer />
                    </ParentContainer>
                </BrowserView>
                <MobileView>
                    <Head>
                        <title>Mydogspies.com - Coding, 3D and project management - Full stack development</title>
                    </Head>
                    <h2>Welcome to Mydogspies.com | Mobile version will be up mid September 2021!</h2>
                </MobileView>
            </>
        )

    } else {
        return (
            <>
                <OfflinePage />
            </>
        )
    }
}

const ParentContainer = styled.div`

`;





