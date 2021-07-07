const oktaAuthenticate = async () =>  {

    const url = process.env.OKTA_DEV_URL +
        '/oauth2/' +
        process.env.OKTA_CUSTOM_SERVER_NAME +
        '/v1/token?grant_type=client_credentials&scope=customScope';

    // get new access token
    try {
        const res = await fetch(url,  {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Basic ' + process.env.OKTA_CLIENT_AUTH,
                'Accept': 'application/json',
                'Cache-Control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
        const result = await res.json();
        const token = result.access_token;
        const expires = result.expires_in;
        return token;
    } catch (error) {
        console.log('oktaAuthenticate error in fetch clause: ' + error);
        return false;
    }
}

module.exports = oktaAuthenticate;
