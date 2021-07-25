const fetch = require('node-fetch');
const parseResponse = require('./functions/parseResponse');

const api_url = 'https://api.clashofclans.com';
const base_url = '/v1';

class ClashOfClans {
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

        this.getClan = function (clanTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/clans/%23${clanTag}`, {
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

        this.getClanMemberList = function (clanTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/clans/%23${clanTag}/members`, {
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

        this.getCurrentClanWar = function (clanTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/clans/%23${clanTag}/currentwar`, {
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

        this.getClanWarLog = function (clanTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/clans/%23${clanTag}/warlog`, {
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

        this.getClanWar = function (warTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/clanwarleagues/wars/${warTag}`, {
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

        this.getCurrentClanWarGroup = function (clanTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/clans/%23${clanTag}/currentwar/leaguegroup`, {
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

        this.getLeagueList = function () {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/leagues`, {
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

        this.getLeague = function (leagueId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/leagues/${leagueId}`, {
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

        this.getLeagueSeasonList = function (leagueId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/leagues/${leagueId}/seasons`, {
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

        this.getLeagueSeason = function (leagueId, seasonId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/leagues/${leagueId}/seasons/${seasonId}`, {
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

        this.getWarLeagueList = function () {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/warleagues`, {
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

        this.getWarLeague = function (leagueId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/warleagues/${leagueId}`, {
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

        this.getLocationList = function () {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/locations`, {
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

        this.getLocation = function (locationId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/locations/${locationId}`, {
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

        this.getLocationClanRanking = function (locationId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/locations/${locationId}/rankings/clans`, {
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

        this.getLocationPlayerRanking = function (locationId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/locations/${locationId}/rankings/players`, {
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

        this.getLocationClanVersusRanking = function (locationId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/locations/${locationId}/rankings/clans-versus`, {
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

        this.getLocationPlayerVersusRanking = function (locationId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/locations/${locationId}/rankings/players-versus`, {
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

        this.getGoldPass = function () {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/goldpass/seasons/current`, {
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

        this.getPlayerLabelList = function () {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/labels/players`, {
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

        this.getClanLabelList = function () {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/labels/clans`, {
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

module.exports = ClashOfClans;