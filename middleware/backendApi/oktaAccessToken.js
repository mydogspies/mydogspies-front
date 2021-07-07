import getToken from "./oktaAuthenticate";

const oktaAccessToken = async () =>  {
    try {
        return await getToken();
    } catch (error) {
        console.log('Okta API error: ' + error);
        return false;
    }
}

module.exports = oktaAccessToken;
