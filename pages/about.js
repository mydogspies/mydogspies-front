import Head from 'next/head';

export default function About({siteStatus}) {
    return (
        <div>

            <Head>
                <title>Bringbackdada.com - all about the Bringbackdada project - fine art body photography</title>
            </Head>

            <h2>about page</h2>
            <h5>Status: {siteStatus.toString()}</h5>

        </div>
    );
}
