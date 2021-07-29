const fetch = require('./functions/fetch');

const api_url = 'https://api.clashofclans.com';
const base_url = '/v1';

class ClashOfClans {
    constructor(apiKey) {
        if (!apiKey) throw new Error('You didn\'t provided a Clash of Clans API token!');

        this.getPlayer = function (playerTag) {
            return fetch(apiKey, `${api_url}${base_url}/players/${playerTag.replace('#', '%23')}`)
        };

        this.searchClan = function (name, options = {
            limit: '',
            minMembers: '',
            maxMembers: '',
            minClanPoints: '',
            minClanLevel: '',
            warFrequency: '',
            locationId: '',
            labelIds: ''
        }) {
            if (!name) throw new Error('You didn\'t provided a clan name!');
            return fetch(apiKey, `${api_url}${base_url}/clans${name ? `?name=${name}` : ''}${options.limit ? `&limit=${options.limit}` : ''}${options.minMembers ? `&minMembers=${options.minMembers}` : ''}${options.maxMembers ? `&maxMembers=${options.maxMembers}` : ''}${options.minClanPoints ? `&minClanPoints=${options.minClanPoints}` : ''}${options.minClanLevel ? `&minClanLevel=${minClanLevel}` : ''}${options.warFrequency ? `&warFrequency=${options.clanWarFrequency}` : ''}${options.locationId ? `&locationId=${options.locationId}` : ''}${options.labelIds ? `&labelIds=${options.labelIds.replace(' ', '%20')}` : ''}`);
        };

        this.getClan = function (clanTag) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}`);
        };

        this.getClanMemberList = function (clanTag, options = {
            limit: ''
        }) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}/members${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getCurrentClanWar = function (clanTag) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}/currentwar`);
        };

        this.getClanWarLog = function (clanTag, options = {
            limit: ''
        }) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}/warlog${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getClanWar = function (warTag) {
            if (!warTag) throw new Error('You didn\'t provided a war tag!');
            return fetch(apiKey, `${api_url}${base_url}/clanwarleagues/wars/${warTag.replace('#', '%23')}`);
        };

        this.getCurrentClanWarGroup = function (clanTag) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/%23${clanTag}/currentwar/leaguegroup`);
        };

        this.getLeagueList = function (options = {
            limit: ''
        }) {
            return fetch(apiKey, `${api_url}${base_url}/leagues${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getLeague = function (leagueId) {
            if (!leagueId) throw new Error('You didn\'t provided a league id!');
            return fetch(apiKey, `${api_url}${base_url}/leagues/${leagueId}`);
        };

        this.getLeagueSeasonList = function (leagueId, options = {
            limit: ''
        }) {
            if (!leagueId) throw new Error('You didn\'t provided a league id!');
            return fetch(apiKey, `${api_url}${base_url}/leagues/${leagueId}/seasons${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getLeagueSeason = function (leagueId, seasonId, options = {
            limit: ''
        }) {
            if (!leagueId) throw new Error('You didn\'t provided a league id!');
            if (!seasonId) throw new Error('You didn\'t provided a season id!');
            return fetch(apiKey, `${api_url}${base_url}/leagues/${leagueId}/seasons/${seasonId}${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getWarLeagueList = function (options = {
            limit: ''
        }) {
            return fetch(apiKey, `${api_url}${base_url}/warleagues${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getWarLeague = function (leagueId) {
            if (!leagueId) throw new Error('You didn\'t provided a league id!');
            return fetch(apiKey, `${api_url}${base_url}/warleagues/${leagueId}`);
        };

        this.getLocationList = function (options = {
            limit: ''
        }) {
            return fetch(apiKey, `${api_url}${base_url}/locations${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getLocation = function (locationId) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}`);
        };

        this.getLocationClanRankingList = function (locationId, options = {
            limit: ''
        }) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/rankings/clans${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getLocationPlayerRankingList = function (locationId, options = {
            limit: ''
        }) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/rankings/players${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getLocationClanVersusRankingList = function (locationId, options = {
            limit: ''
        }) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/rankings/clans-versus${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getLocationPlayerVersusRankingList = function (locationId, options = {
            limit: ''
        }) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/rankings/players-versus${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getGoldPass = function () {
            return fetch(apiKey, `${api_url}${base_url}/goldpass/seasons/current`);
        };

        this.getPlayerLabelList = function (options = {
            limit: ''
        }) {
            return fetch(apiKey, `${api_url}${base_url}/labels/players${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.getClanLabelList = function (options = {
            limit: ''
        }) {
            return fetch(apiKey, `${api_url}${base_url}/labels/clans${options.limit ? `?limit=${options.limit}` : ''}`);
        };
    };
};

module.exports = ClashOfClans;