import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Okta({
            clientId: process.env.OKTA_CLIENT_ID,
            domain: process.env.OKTA_DOMAIN,
            scope: 'openid profile email',
            authorizationUrl: `https://${process.env.OKTA_DOMAIN}/oauth2/default/v1/authorize/?response_type=code&state=false`,
            protection: 'pkce',
            jwt: {
                signingKey: process.env.JWT_SIGNING_KEY,
            }
        }),
        // ...add more providers here
    ]
}

export default (req, res) => NextAuth(req, res, options);
