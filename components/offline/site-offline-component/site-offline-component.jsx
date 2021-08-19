import Head from "next/head";
import styled from "styled-components";
import logo from '../../../public/assets/local/icons/dog_blue_final.svg';

const OfflinePage = () => {

    return (
        <Container className="offline-pages">

            <Head>
                <title>Mydogspies.com - Coding, 3D and project management - Full stack development</title>
            </Head>

            <Grid>
                <Logo src={logo.src} alt="Mydogspies.com blue logo"/>
                <TextContainer>
                    <Headline><h2>Welcome to Mydogspies.com</h2></Headline>
                    <Text>
                        <p>
                            This space will soon become the home for Berlin-based visual designer and software
                            developer Mydogspies. Still in construction but we hope it will be up end of July.
                        </p>
                    </Text>
                </TextContainer>
            </Grid>

            <Footer>
                <UrlText>
                    Mydogspies.com 2021
                </UrlText>
                <LicenseText>
                    <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode" target="_blank">
                        Creative Commons CC BY-NC-SA 4.0
                    </a>
                </LicenseText>
            </Footer>

        </Container>
    );
};

/* CSS */

const Container = styled.div`
  height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 45%;
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media all and (max-width: 960px) {
    grid-template-columns: 1fr;
    width: 80%;
  }
`;

const Logo = styled.img`
  grid-column-start: 1;
  
  @media all and (max-width: 960px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    padding: 0 0 20px 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 50px;
  grid-column-start: 2;

  @media all and (max-width: 960px) {
    display: block;
    grid-column-start: 1;
  }
`;

const Headline = styled.div`
  position: relative;
  left: 50px;
  bottom: 30px;
  text-align: left;

  @media all and (max-width: 960px) {
    left: 0;
    bottom: 0;
    text-align: center;
  }
`;

const Text = styled.div`
  position: relative;
  left: 65px;
  bottom: 10px;
  text-align: left;

  @media all and (max-width: 960px) {
    left: 0;
    bottom: 0;
    text-align: center;
    padding: 20px 0 0 0;
  }
`;

/* Footer */

const Footer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media all and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const UrlText = styled.div`
  position: relative;
  text-align: right;
  padding: 0 5px 0 0;
  grid-column-start: 1;
  grid-row-start: 1;
  
  @media all and (max-width: 960px) {
    grid-column-start: 1;
    grid-row-start: 1;
    text-align: center;
  }
`;

const LicenseText = styled.div`
  position: relative;
  grid-column-start: 2;
  grid-row-start: 1;
  text-align: left;
  
  @media all and (max-width: 960px) {
    grid-column-start: 1;
    grid-row-start: 2;
    text-align: center;
  }
`;

export default OfflinePage;
