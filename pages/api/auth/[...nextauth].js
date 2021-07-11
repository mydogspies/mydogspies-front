import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Okta({
            clientId: process.env.OKTA_CLIENT_ID,
            domain: process.env.OKTA_DOMAIN,
            scope: 'openid profile email',
            accessTokenUrl: `https://${process.env.OKTA_DOMAIN}/oauth2/default/v1/token`,
            authorizationUrl: `https://${process.env.OKTA_DOMAIN}/oauth2/default/v1/authorize/?response_type=code&state=false`,
            protection: 'pkce',

        }),
        // ...add more providers here
    ],

    jwt: {
        signingKey: process.env.JWT_SIGNING_KEY,
    }
}

export default (req, res) => NextAuth(req, res, options);
