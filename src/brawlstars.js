const fetch = require('node-fetch');
const parseResponse = require('./functions/parseResponse');

const api_url = 'https://api.brawlstars.com';
const base_url = '/v1';

class BrawlStars {
    constructor(apiKey) {
        this.getPlayer = function (playerTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/players/%23${playerTag}`, {
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

        this.getBattleLog = function (playerTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/players/%23${playerTag}/battlelog`, {
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

        this.getClub = function (clubTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/clubs/%23${clubTag}`, {
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

        this.getClubMemberList = function (clubTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/clubs/%23${clubTag}/members`, {
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

        this.getEventList = function () {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/events/rotation`, {
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

        this.getBrawler = function (brawlerId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/brawlers/${brawlerId}`, {
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

        this.getBrawlerList = function () {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/brawlers`, {
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

        this.getPlayerRanking = function (countryCode) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/rankings/${countryCode}/players`, {
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

        this.getClubRanking = function (countryCode) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/rankings/${countryCode}/clubs`, {
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

        this.getBrawlerRanking = function (countryCode, brawlerId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/rankings/${countryCode}/brawlers/${brawlerId}`, {
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

        this.getPowerplaySeasonRanking = function (countryCode, seasonId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/rankings/${countryCode}/powerplay/seasons/${seasonId}`, {
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
    }
};

module.exports = BrawlStars;