const fetch = require('./functions/fetch');

const api_url = 'https://api.clashofclans.com';
const base_url = '/v1';

class ClashOfClans {
    constructor(apiKey) {
        if (!apiKey) throw new Error('You didn\'t provided a Clash of Clans API token!');

        this.getPlayer = function (playerTag) {
            return fetch(apiKey, `${api_url}${base_url}/players/${playerTag.replace('#', '%23')}`)
        };

        this.searchClan = function (name, limit, minMembers, maxMembers, minClanPoints, minClanLevel, warFrequency, locationId, labelIds) {
            if (!name) throw new Error('You didn\'t provided a clan name!');
            return fetch(apiKey, `${api_url}${base_url}/clans${name ? `?name=${name}` : ''}${limit ? `&limit=${limit}` : ''}${minMembers ? `&minMembers=${minMembers}` : ''}${maxMembers ? `&maxMembers=${maxMembers}` : ''}${minClanPoints ? `&minClanPoints=${minClanPoints}` : ''}${minClanLevel ? `&minClanLevel=${minClanLevel}` : ''}${warFrequency ? `&warFrequency=${clanWarFrequency}` : ''}${locationId ? `&locationId=${locationId}` : ''}${labelIds ? `&labelIds=${labelIds.replace(' ', '%20')}` : ''}`);
        };

        this.getClan = function (clanTag) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}`);
        };

        this.getClanMemberList = function (clanTag, limit) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}/members${limit ? `?limit=${limit}` : ''}`);
        };

        this.getCurrentClanWar = function (clanTag) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}/currentwar`);
        };

        this.getClanWarLog = function (clanTag, limit) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}/warlog${limit ? `?limit=${limit}` : ''}`);
        };

        this.getClanWar = function (warTag) {
            if (!warTag) throw new Error('You didn\'t provided a war tag!');
            return fetch(apiKey, `${api_url}${base_url}/clanwarleagues/wars/${warTag.replace('#', '%23')}`);
        };

        this.getCurrentClanWarGroup = function (clanTag) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/%23${clanTag}/currentwar/leaguegroup`);
        };

        this.getLeagueList = function (limit) {
            return fetch(apiKey, `${api_url}${base_url}/leagues${limit ? `?limit=${limit}` : ''}`);
        };

        this.getLeague = function (leagueId) {
            if (!leagueId) throw new Error('You didn\'t provided a league id!');
            return fetch(apiKey, `${api_url}${base_url}/leagues/${leagueId}`);
        };

        this.getLeagueSeasonList = function (leagueId, limit) {
            if (!leagueId) throw new Error('You didn\'t provided a league id!');
            return fetch(apiKey, `${api_url}${base_url}/leagues/${leagueId}/seasons${limit ? `?limit=${limit}` : ''}`);
        };

        this.getLeagueSeason = function (leagueId, seasonId, limit) {
            if (!leagueId) throw new Error('You didn\'t provided a league id!');
            if (!seasonId) throw new Error('You didn\'t provided a season id!');
            return fetch(apiKey, `${api_url}${base_url}/leagues/${leagueId}/seasons/${seasonId}${limit ? `?limit=${limit}` : ''}`);
        };

        this.getWarLeagueList = function (limit) {
            return fetch(apiKey, `${api_url}${base_url}/warleagues${limit ? `?limit=${limit}` : ''}`);
        };

        this.getWarLeague = function (leagueId) {
            if (!leagueId) throw new Error('You didn\'t provided a league id!');
            return fetch(apiKey, `${api_url}${base_url}/warleagues/${leagueId}`);
        };

        this.getLocationList = function (limit) {
            return fetch(apiKey, `${api_url}${base_url}/locations${limit ? `?limit=${limit}` : ''}`);
        };

        this.getLocation = function (locationId) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}`);
        };

        this.getLocationClanRankingList = function (locationId, limit) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/rankings/clans${limit ? `?limit=${limit}` : ''}`);
        };

        this.getLocationPlayerRankingList = function (locationId, limit) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/rankings/players${limit ? `?limit=${limit}` : ''}`);
        };

        this.getLocationClanVersusRankingList = function (locationId, limit) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/rankings/clans-versus${limit ? `?limit=${limit}` : ''}`);
        };

        this.getLocationPlayerVersusRankingList = function (locationId, limit) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/rankings/players-versus${limit ? `?limit=${limit}` : ''}`);
        };

        this.getGoldPass = function () {
            return fetch(apiKey, `${api_url}${base_url}/goldpass/seasons/current`);
        };

        this.getPlayerLabelList = function (limit) {
            return fetch(apiKey, `${api_url}${base_url}/labels/players${limit ? `?limit=${limit}` : ''}`);
        };

        this.getClanLabelList = function (limit) {
            return fetch(apiKey, `${api_url}${base_url}/labels/clans${limit ? `?limit=${limit}` : ''}`);
        };
    };
};

module.exports = ClashOfClans;