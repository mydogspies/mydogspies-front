import Head from 'next/head';
import OfflinePage from "../components/site-offline-component/site-offline-component";

export default function Home({status}) {

    if (status) {
        return (
            <div>
                <Head>
                    <title>Mydogspies.com - Coding, 3D and project management - Full stack development</title>
                </Head>
                <main>
                    <h1>Welcome to Mydogspies</h1>
                    <p>This is the index page.</p>
                </main>
            </div>
        );
    } else {
        return (
            <div>
                <OfflinePage />
            </div>
        )
    }

}
