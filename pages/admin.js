import {useUser} from '@auth0/nextjs-auth0';
import Head from 'next/head';
import styled from "styled-components";


export default function Admin() {

    // const {user, error, isLoading} = useUser();

    //TODO user set to FALSE until new auth logic in place - see status-wrapper.js
    const user = false;

    if (user) {
        return (
            <Container className="colors-projects">

                <Head>
                    <title>Mydogspies.com - Admin</title>
                </Head>

                <Content>
                    <Headline className="headline-general">Welcome to the Mydogspies collaboration area</Headline>
                    <AreaLinks className="paragraph-general">
                        <a href="/api/auth/logout">Logout</a>
                    </AreaLinks>
                </Content>

            </Container>
        );
    } else {
        return (

            <Container className="colors-projects">

                <Head>
                    <title>Mydogspies.com - Admin</title>
                </Head>

                <Content>
                    <Headline className="headline-general">Welcome to the Mydogspies collaboration area</Headline>
                    <AreaLinks className="paragraph-general">
                        This area is currently in development
                    </AreaLinks>
                    <LinkBack><a href="/" target="_top">Back to index page</a></LinkBack>
                </Content>

            </Container>


            // TODO login logic disabled until new auth logic in place
            /*<Container className="colors-projects">

                <Head>
                    <title>Mydogspies.com - Admin</title>
                </Head>

                <Content>
                    <Headline className="headline-general">Welcome to the Mydogspies collaboration area</Headline>
                    <AreaLinks className="paragraph-general">
                        <a href="/api/auth/login">Login</a>
                    </AreaLinks>
                </Content>

            </Container>*/
        )
    }
};

/* CSS */

const Container = styled.div`
    height: 100vh;
`;

const Content = styled.div`
`;

const AreaLinks = styled.div`
  padding: 20px 0 0 0;
  text-align: center;
`;

const Headline = styled.div`
  padding: 20px 0 0 0;
  text-align: center;
`;

const LinkBack = styled.div`
  padding: 20px 0 0 0;
  text-align: center;
`;
