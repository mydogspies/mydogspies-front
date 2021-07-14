import Head from 'next/head';
import styled from "styled-components";

import OfflinePage from '../components/offline/site-offline-component/site-offline-component';

export default function Home({status, userStatus}) {

    if (status || userStatus) {
        return (
            <Container className="index-page">
                <Head>
                    <title>Mydogspies.com - Coding, 3D and project management - Full stack development</title>
                </Head>
                <Temporary>
                    <h2>Welcome to Mydogspies</h2>
                    <p>This is the index page.</p>
                </Temporary>
            </Container>
        );
    } else {
        return (
            <>
                <OfflinePage />
            </>
        )
    }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

// TODO temporary - should be removed asap
const Temporary = styled.div`
    text-align: center;
  position: relative;
  bottom: 3%;
`;


