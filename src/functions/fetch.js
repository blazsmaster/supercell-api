const fetch = require('node-fetch');
const parseResponse = require('./parseResponse');

module.exports = (apiKey, baseUrl) => {
    return new Promise(function (resolve, reject) {
        fetch(baseUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'authorization': `Bearer ${apiKey}`
            },
        })
        .then(res => res.json())
        .then(json => {
            resolve(parseResponse(json));
        })
        .catch(err => reject(err));
    });
};