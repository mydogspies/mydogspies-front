import Head from "next/head";
import styled from "styled-components";
import Image from 'next/image';
import logo from '../../public/assets/dog_blue_final.svg';

const OfflinePage = () => {

    return (
        <div className="offline-content">

            <Head>
                <title>Mydogspies.com - Coding, 3D and project management - Full stack development</title>
            </Head>
            <Grid>
                <Image src={logo} height={200} width={200} />

                <Text>This site is under some serious construction and will be back end of summer 2021!</Text>
            </Grid>

        </div>
    );
};

/* CSS */
const Grid = styled.div`
  // position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media all and (max-width: 759px) {
    grid-template-columns: 1fr;
  }
` ;

const Text = styled.div`
  font-size: 22px;
` ;

export default OfflinePage;
