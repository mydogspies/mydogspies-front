import Head from 'next/head';
import OfflinePage from '../components/site-offline-component/site-offline-component';
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function Home({status}) {

    // const [token, setToken] = useState();
    // const data = useSelector(state => state.tokens);
    // const thisToken = data.currentToken;

    useEffect(() => {
        // setToken(thisToken);
    },[]);

    if (status) {
        return (
            <>
                <Head>
                    <title>Mydogspies.com - Coding, 3D and project management - Full stack development</title>
                </Head>
                <main>
                    <h1>Welcome to Mydogspies</h1>
                    <p>This is the index page.</p>
                </main>
            </>
        );
    } else {
        return (
            <>
                <OfflinePage />
            </>
        )
    }
}

export async function getStaticProps() {

    console.log('Ima a static thing')

    return {
        props: {},
    }
}


