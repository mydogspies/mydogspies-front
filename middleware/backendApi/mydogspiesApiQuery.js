const mydogspiesApiQuery = async (url, method, token) => {
    try {
        const res = await fetch(url,  {
            method: method,
            headers: new Headers({
                'Authorization': 'Bearer ' + token
            })
        });
        return await res.json();
    } catch (error) {
        console.log('Mydogspies API error: ' + error);
        return false;
    }
}

module.exports = mydogspiesApiQuery;
