const fetch = require('node-fetch');
const parseResponse = require('./functions/parseResponse');

const api_url = 'https://api.clashroyale.com';
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

        this.getUpcomingChestList = function (playerTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/players/%23${playerTag}/upcomingchests`, {
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

        this.getCardList = function () {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/cards`, {
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

        this.getCurrentRiverRace = function (clanTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/clans/%23${clanTag}/currentriverrace`, {
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

        this.getRiverRaceLog = function (clanTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/clans/%23${clanTag}/riverracelog`, {
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

        this.getTournament = function (tournamentTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/tournaments/%23${tournamentTag}`, {
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

        this.getGlobalTournamentList = function () {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/globaltournaments`, {
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

        this.getLocationClanWarRanking = function (locationId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/locations/${locationId}/ranking/clanwars`, {
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

        this.getGlobalSeasonlist = function () {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/locations/global/seasons`, {
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

        this.getGlobalSeason = function (seasonId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/locations/global/seasons/${seasonId}`, {
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

        this.getGlobalSeasonPlayerRanking = function (seasonId) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/locations/global/seasons/${seasonId}/rankings/players`, {
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

        this.getGlobalTournamentRanking = function (tournamentTag) {
            return new Promise(function (resolve, reject) {
                fetch(`${api_url}${base_url}/locations/global/rankings/tournaments/${tournamentTag}`, {
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