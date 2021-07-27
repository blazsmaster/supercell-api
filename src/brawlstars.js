const fetch = require('./functions/fetch');

const api_url = 'https://api.brawlstars.com';
const base_url = '/v1';

class BrawlStars {
    constructor(apiKey) {
        if (!apiKey) throw new Error('You didn\'t provided a Brawl Stars API token!');

        this.getPlayer = function (playerTag) {
            if (!playerTag) throw new Error('You didn\'t provided a player tag!');
            return fetch(apiKey, `${api_url}${base_url}/players/${playerTag.replace('#', '%23')}`);
        };

        this.getBattleLog = function (playerTag) {
            if (!playerTag) throw new Error('You didn\'t provided a player tag!');
            return fetch(apiKey, `${api_url}${base_url}/players/%23${playerTag.replace('#', '%23')}/battlelog`);
        };

        this.getClub = function (clubTag) {
            if (!clubTag) throw new Error('You didn\'t provided a club tag!');
            return fetch(apiKey, `${api_url}${base_url}/clubs/%23${clubTag.replace('#', '%23')}`);
        };

        this.getClubMemberList = function (clubTag, limit) {
            if (!clubTag) throw new Error('You didn\'t provided a club tag!');
            if (limit && isNaN(limit)) throw new Error('Output limit cannot contain letters or any illegal characters!');
            return fetch(apiKey, `${api_url}${base_url}/clubs/%23${clubTag.replace('#', '%23')}/members${limit ? `?limit=${limit}` : ''}`);
        };

        this.getEventList = function () {
            return fetch(apiKey, `${api_url}${base_url}/events/rotation`);
        };

        this.getBrawlerList = function (limit) {
            if (limit && isNaN(limit)) throw new Error('Output limit cannot contain letters or any illegal characters!');
            return fetch(apiKey, `${api_url}${base_url}/brawlers${limit ? `?limit=${limit}` : ''}`);
        };

        this.getBrawler = function (brawlerId) {
            if (!brawlerId) throw new Error('You didn\'t provided a brawler id!');
            if (isNaN(brawlerId)) throw new Error('Brawler id cannot contain letters or any illegal characters!');
            return fetch(apiKey, `${api_url}${base_url}/brawlers/${brawlerId}`);
        };

        this.getPlayerRankingList = function (countryCode, limit) {
            if (!countryCode) throw new Error('You didn\'t provided a country code!');
            if (limit && isNaN(limit)) throw new Error('Output limit cannot contain letters or any illegal characters!');
            return fetch(apiKey, `${api_url}${base_url}/rankings/${countryCode}/players${limit ? `?limit=${limit}` : ''}`);
        };

        this.getClubRankingList = function (countryCode, limit) {
            if (!countryCode) throw new Error('You didn\'t provided a country code!');
            if (limit && isNaN(limit)) throw new Error('Output limit cannot contain letters or any illegal characters!');
            return fetch(apiKey, `${api_url}${base_url}/rankings/${countryCode}/clubs${limit ? `?limit=${limit}` : ''}`);
        };

        this.getBrawlerRankingList = function (countryCode, brawlerId, limit) {
            if (!countryCode) throw new Error('You didn\'t provided a country code!');
            if (!brawlerId) throw new Error('You didn\'t provided a brawler id!');
            if (isNaN(brawlerId)) throw new Error('Brawler id cannot contain letters or any illegal characters!');
            if (limit && isNaN(limit)) throw new Error('Output limit cannot contain letters or any illegal characters!');
            return fetch(apiKey, `${api_url}${base_url}/rankings/${countryCode}/brawlers/${brawlerId}${limit ? `?limit=${limit}` : ''}`);
        };

        this.getPowerplaySeasonRankingList = function (countryCode, limit) {
            if (!countryCode) throw new Error('You didn\'t provided a country code!');
            if (limit && isNaN(limit)) throw new Error('Output limit cannot contain letters or any illegal characters!');
            return fetch(apiKey, `${api_url}${base_url}/rankings/${countryCode}/powerplay/seasons${limit ? `?limit=${limit}` : ''}`);
        };

        this.getPowerplaySeasonRanking = function (countryCode, seasonId, limit) {
            if (!countryCode) throw new Error('You didn\'t provided a country code!');
            if (!brawlerId) throw new Error('You didn\'t provided a season id!');
            if (isNaN(brawlerId)) throw new Error('Season id cannot contain letters or any illegal characters!');
            if (limit && isNaN(limit)) throw new Error('Output limit cannot contain letters or any illegal characters!');
            return fetch(apiKey, `${api_url}${base_url}/rankings/${countryCode}/powerplay/seasons/${seasonId}${limit ? `?limit=${limit}` : ''}`);
        };
    };
};

module.exports = BrawlStars;