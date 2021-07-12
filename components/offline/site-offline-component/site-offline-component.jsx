import Head from "next/head";
import styled from "styled-components";
import logo from '../../../public/assets/dog_blue_final.svg';

const OfflinePage = () => {

    return (
        <Container>

            <Head>
                <title>Mydogspies.com - Coding, 3D and project management - Full stack development</title>
            </Head>

            <Content id='container'>
                <Grid>
                    <Logo src={logo}/>
                    <TextContainer>
                        <Headline className="headline-general">Welcome to Mydogspies.com</Headline>
                        <Text className="paragraph-general">This space will soon become the home for Berlin-based visual designer and software
                            developer
                            Mydogspies. Still in construction but we hope it will be up end of July.</Text>
                    </TextContainer>

                </Grid>
            </Content>
            <Footer>
                <UrlText className="small-general">
                    Mydogspies.com 2021
                </UrlText>
                <LicenseText className="small-general">
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

`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Grid = styled.div`
  position: relative;
  top: -35px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 75%;

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
  font-weight: bold;
  text-align: left;

  @media all and (max-width: 960px) {
    text-align: center;
    padding: 12px 0 0 0;
  }
`;

const Text = styled.div`
  padding: 20px 0 0 15px;
  text-align: left;

  @media all and (max-width: 960px) {
    padding: 18px 0 0 4%;
  }
`;

/* Footer */

const Footer = styled.div`
  position: absolute;
  top: 90%;
  left: 37%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  // text-align: center;

  @media all and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    top: -27px;
  }
`;

const UrlText = styled.div`
  padding: 0 5px 0 0;
  text-align: right;
  grid-column-start: 1;
  grid-row-start: 1;
  @media all and (max-width: 960px) {
    padding: 0 0 0 0;
    text-align: center;
  }
`;

const LicenseText = styled.div`
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
