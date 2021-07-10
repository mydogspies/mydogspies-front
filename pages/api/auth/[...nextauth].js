import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Okta({
            clientId: process.env.OKTA_CLIENT_ID,
            domain: process.env.OKTA_DOMAIN,
            response_type: 'code',
            response_mode: 'fragment',
            scope: 'openid profile email',
            // issuer: 'https://' + process.env.OKTA_DOMAIN + '/oauth2/default',
            authorizationUrl: `https://${process.env.OKTA_DOMAIN}/oauth2/default/v1/authorize/`,
            protection: 'pkce',
            debug: true,
        }),
        // ...add more providers here
    ]
}

export default (req, res) => NextAuth(req, res, options);
