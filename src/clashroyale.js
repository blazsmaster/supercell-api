const fetch = require('./functions/fetch');

const api_url = 'https://api.clashroyale.com';
const base_url = '/v1';

class ClashRoyale {
    constructor(apiKey) {
        if (!apiKey) throw new Error('You didn\'t provided a Clash Royale API token!');

        this.getPlayer = function (playerTag) {
            if (!playerTag) throw new Error('You didn\'t provided a player tag!');
            return fetch(apiKey, `${api_url}${base_url}/players/${playerTag.replace('#', '%23')}`);
        };

        this.getUpcomingChestList = function (playerTag) {
            if (!playerTag) throw new Error('You didn\'t provided a player tag!');
            return fetch(apiKey, `${api_url}${base_url}/players/${playerTag.replace('#', '%23')}/upcomingchests`);
        };

        this.getBattleLog = function (playerTag) {
            if (!playerTag) throw new Error('You didn\'t provided a player tag!');
            return fetch(apiKey, `${api_url}${base_url}/players/${playerTag.replace('#', '%23')}/battlelog`);
        };

        this.getCardList = function (limit) {
            return fetch(apiKey, `${api_url}${base_url}/cards${limit ? `?limit=${limit}` : ''}`);
        };

        this.searchClan = function (name, limit, minMembers, maxMembers, minScore, locationId) {
            if (!name) throw new Error('You didn\'t provided a clan name!');
            return fetch(apiKey, `${api_url}${base_url}/clans${name ? `?name=${name}` : ''}${limit ? `&limit=${limit}` : ''}${minMembers ? `&minMembers=${minMembers}` : ''}${maxMembers ? `&maxMembers=${maxMembers}` : ''}${minScore ? `&minScore=${minScore}` : ''}${locationId ? `&locationId=${locationId}` : ''}`)
        };

        this.getClan = function (clanTag) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}`)
        };

        this.getClanMemberList = function (clanTag, limit) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}/members${limit ? `?limit=${limit}` : ''}`)
        };

        this.getCurrentRiverRace = function (clanTag) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}/currentriverrace`)
        };

        this.getRiverRaceLog = function (clanTag, limit) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}/riverracelog${limit ? `?limit=${limit}` : ''}`)
        };

        this.searchTournament = function (name, limit) {
            if (!name) throw new Error('You didn\'t provided a tournament name!');
            return fetch(apiKey, `${api_url}${base_url}/tournaments${name ? `?name=${name}` : ''}${limit ? `&limit=${limit}` : ''}`)
        };

        this.getTournament = function (tournamentTag) {
            if (!playerTag) throw new Error('You didn\'t provided a tournament tag!');
            return fetch(apiKey, `${api_url}${base_url}/tournaments/${tournamentTag.replace('#', '%23')}`)
        };

        this.getGlobalTournamentList = function () {
            return fetch(apiKey, `${api_url}${base_url}/globaltournaments`)
        };

        this.getLocationList = function (limit) {
            return fetch(apiKey, `${api_url}${base_url}/locations${limit ? `?limit=${limit}` : ''}`)
        };

        this.getLocation = function (locationId) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}`)
        };

        this.getLocationClanRankingList = function (locationId, limit) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/rankings/clans${limit ? `?limit=${limit}` : ''}`)
        };

        this.getLocationPlayerRankingList = function (locationId, limit) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/rankings/players${limit ? `?limit=${limit}` : ''}`)
        };

        this.getLocationClanWarRankingList = function (locationId, limit) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/ranking/clanwars${limit ? `?limit=${limit}` : ''}`)
        };

        this.getGlobalSeasonlist = function () {
            return fetch(apiKey, `${api_url}${base_url}/locations/global/seasons`)
        };

        this.getGlobalSeason = function (seasonId) {
            if (!seasonId) throw new Error('You didn\'t provided a season id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/global/seasons/${seasonId}`)
        };

        this.getGlobalSeasonPlayerRankingList = function (seasonId, limit) {
            if (!seasonId) throw new Error('You didn\'t provided a season id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/global/seasons/${seasonId}/rankings/players${limit ? `?limit=${limit}` : ''}`)
        };

        this.getGlobalTournamentRankingList = function (tournamentTag, limit) {
            if (!tournamentTag) throw new Error('You didn\'t provided a tournament tag!');
            return fetch(apiKey, `${api_url}${base_url}/locations/global/rankings/tournaments/${tournamentTag.replace('#', '%23')}${limit ? `?limit=${limit}` : ''}`)
        };
    };
};

module.exports = ClashRoyale;