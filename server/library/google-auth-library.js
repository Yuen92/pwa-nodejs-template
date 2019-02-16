const { JWT } = require('google-auth-library');

exports.queryGoogleAPI = async function (url, params) {
    const timeString = new Date().toLocaleTimeString();
    console.log(`[${timeString}] ${url}`);

    const client = new JWT(
        params.keys.client_email,
        params.vars,
        params.keys.private_key,
        params.scopes
    );
    return await client.request({ url });
};