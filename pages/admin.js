import {useUser} from '@auth0/nextjs-auth0';
import Head from 'next/head';
import React from "react";
import styled from "styled-components";


export default function Admin() {

    const {user, error, isLoading} = useUser();

    if (user) {
        return (
            <Container>

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
            <Container>

                <Head>
                    <title>Mydogspies.com - Admin</title>
                </Head>

                <Content>
                    <Headline className="headline-general">Welcome to the Mydogspies collaboration area</Headline>
                    <AreaLinks className="paragraph-general">
                        <a href="/api/auth/login">Login</a>
                    </AreaLinks>
                </Content>

            </Container>
        )
    }
};

/* CSS */

const Container = styled.div`
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
