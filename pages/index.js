import Head from 'next/head';

import OfflinePage from '../components/offline/site-offline-component/site-offline-component';
import IndexTop from '../components/index/index_top/index_top';
import IndexCode from "../components/index/index_code/index_code";
import IndexVisual from "../components/index/index_visual/index_visual";
import IndexProject from "../components/index/index_project/index_project";

export default function Home({status, userStatus}) {

    if (status || userStatus) {
        return (
            <>
                <Head>
                    <title>Mydogspies.com - Coding, 3D and project management - Full stack development</title>
                </Head>
                <IndexTop />
                <IndexCode />
                <IndexVisual />
                <IndexProject />
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




