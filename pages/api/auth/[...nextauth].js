import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Okta({
            // clientId: process.env.OKTA_CLIENT_ID,
            // domain: process.env.OKTA_DOMAIN,
            // scope: 'openid profile email',
            // accessTokenUrl: `https://${process.env.OKTA_DOMAIN}/oauth2/default/v1/token`,
            // authorizationUrl: `https://${process.env.OKTA_DOMAIN}/oauth2/default/v1/authorize/?response_type=code&state=false`,
            // protection: 'pkce',
            // debug: true,

            clientId: process.env.OKTA_CLIENT_ID,
            issuer: `https://${process.env.OKTA_DOMAIN}/oauth2/default`,
            redirectUri: 'https://mydogspies.com/api/auth/callback/okta',
            scope: 'openid profile email',
            protection: 'pkce',
            debug: true,

        }),
        // ...add more providers here
    ],

    jwt: {
        encryption: true,
        secret: process.env.JWT_SECRET,
        signingKey: process.env.JWT_SIGNING_KEY,
        encryptionKey: process.env.JWT_ENCRYPTION_KEY,
    }
}

export default (req, res) => NextAuth(req, res, options);
