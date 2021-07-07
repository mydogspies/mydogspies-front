import Head from "next/head";
import styled from "styled-components";
import logo from '../../public/assets/dog_blue_final.svg';

const OfflinePage = () => {

    return (
        <>

            <Head>
                <title>Mydogspies.com - Coding, 3D and project management - Full stack development</title>
            </Head>

            <Container id='container'>
                <Grid>
                    <Logo src={logo}/>
                    <TextContainer>
                        <Headline>Welcome to Mydogspies.com</Headline>
                        <Text>This space will soon become the home for Berlin-based visual designer and software
                            developer
                            Mydogspies. Still in construction but we hope it will be up end of July.</Text>
                    </TextContainer>

                </Grid>
            </Container>
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

        </>
    );
};

/* CSS */

const Container = styled.div`
  display: flex;
  height: 98%;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  position: relative;
  top: -35px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 50%;

  @media all and (max-width: 960px) {
    top: -30px;
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const Logo = styled.img`
  margin: auto;

  @media all and (max-width: 960px) {
    width: 65%;
  }
`;

const TextContainer = styled.div`
  margin: auto;
  padding: 10px 0 0 25px;

  @media all and (max-width: 960px) {
    width: 65%;
    padding: 10px 0 0 0;
  }
`;

const Headline = styled.div`
  font-family: 'Arvo', serif;
  font-weight: bold;
  font-size: 28px;
  text-align: left;

  @media all and (max-width: 960px) {
    text-align: center;
    padding: 12px 0 0 0;
  }
`;

const Text = styled.div`
  padding: 20px 0 0 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  text-align: left;

  @media all and (max-width: 960px) {
    padding: 18px 0 0 4%;
  }
`;

/* Footer */

const Footer = styled.div`
  position: relative;
  top: -10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: center;

  @media all and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    top: -24px;
  }
`;

const UrlText = styled.div`
  padding: 0 5px 0 0;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: right;
  grid-column-start: 1;
  grid-row-start: 1;
  @media all and (max-width: 960px) {
    padding: 0 0 0 0;
    text-align: center;
  }
`;

const LicenseText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-align: left;
  grid-column-start: 2;
  grid-row-start: 1;
  @media all and (max-width: 960px) {
    grid-column-start: 1;
    grid-row-start: 2;
    text-align: center;
  }
`;

export default OfflinePage;
