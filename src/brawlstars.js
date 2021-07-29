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
            return fetch(apiKey, `${api_url}${base_url}/players/${playerTag.replace('#', '%23')}/battlelog`);
        };

        this.getClub = function (clubTag) {
            if (!clubTag) throw new Error('You didn\'t provided a club tag!');
            return fetch(apiKey, `${api_url}${base_url}/clubs/${clubTag.replace('#', '%23')}`);
        };

        this.getClubMemberList = function (clubTag, options = {
            limit: ''
        }) {
            if (!clubTag) throw new Error('You didn\'t provided a club tag!');
            return fetch(apiKey, `${api_url}${base_url}/clubs/${clubTag.replace('#', '%23')}/members${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getEventList = function () {
            return fetch(apiKey, `${api_url}${base_url}/events/rotation`);
        };

        this.getBrawlerList = function (options = {
            limit: ''
        }) {
            return fetch(apiKey, `${api_url}${base_url}/brawlers${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getBrawler = function (brawlerId) {
            if (!brawlerId) throw new Error('You didn\'t provided a brawler id!');
            return fetch(apiKey, `${api_url}${base_url}/brawlers/${brawlerId}`);
        };

        this.getPlayerRankingList = function (countryCode, options = {
            limit: ''
        }) {
            if (!countryCode) throw new Error('You didn\'t provided a country code!');
            return fetch(apiKey, `${api_url}${base_url}/rankings/${countryCode}/players${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getClubRankingList = function (countryCode, options = {
            limit: ''
        }) {
            if (!countryCode) throw new Error('You didn\'t provided a country code!');
            return fetch(apiKey, `${api_url}${base_url}/rankings/${countryCode}/clubs${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getBrawlerRankingList = function (countryCode, brawlerId, options = {
            limit: ''
        }) {
            if (!countryCode) throw new Error('You didn\'t provided a country code!');
            if (!brawlerId) throw new Error('You didn\'t provided a brawler id!');
            return fetch(apiKey, `${api_url}${base_url}/rankings/${countryCode}/brawlers/${brawlerId}${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getPowerplaySeasonRankingList = function (countryCode, options = {
            limit: ''
        }) {
            if (!countryCode) throw new Error('You didn\'t provided a country code!');
            return fetch(apiKey, `${api_url}${base_url}/rankings/${countryCode}/powerplay/seasons${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getPowerplaySeasonRanking = function (countryCode, seasonId, options = {
            limit: ''
        }) {
            if (!countryCode) throw new Error('You didn\'t provided a country code!');
            if (!brawlerId) throw new Error('You didn\'t provided a season id!');
            return fetch(apiKey, `${api_url}${base_url}/rankings/${countryCode}/powerplay/seasons/${seasonId}${options.limit ? `?limit=${options.limit}` : ''}`);
        };
    };
};

module.exports = BrawlStars;