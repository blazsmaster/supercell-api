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
        
        this.getChallenges = function () {
            return fetch(apiKey, `${api_url}${base_url}/challenges`);
        };

        this.getUpcomingChestList = function (playerTag) {
            if (!playerTag) throw new Error('You didn\'t provided a player tag!');
            return fetch(apiKey, `${api_url}${base_url}/players/${playerTag.replace('#', '%23')}/upcomingchests`);
        };

        this.getBattleLog = function (playerTag) {
            if (!playerTag) throw new Error('You didn\'t provided a player tag!');
            return fetch(apiKey, `${api_url}${base_url}/players/${playerTag.replace('#', '%23')}/battlelog`);
        };

        this.getCardList = function (options = {
            limit: ''
        }) {
            return fetch(apiKey, `${api_url}${base_url}/cards${options.limit ? `?limit=${options.limit}` : ''}`);
        };

        this.searchClan = function (name, options = {
            limit: '',
            minMembers: '',
            maxMembers: '',
            minScore: '',
            locationId: ''
        }) {
            if (!name) throw new Error('You didn\'t provided a clan name!');
            return fetch(apiKey, `${api_url}${base_url}/clans${name ? `?name=${name}` : ''}${options.limit ? `&limit=${options.limit}` : ''}${options.minMembers ? `&minMembers=${options.minMembers}` : ''}${options.maxMembers ? `&maxMembers=${options.maxMembers}` : ''}${options.minScore ? `&minScore=${options.minScore}` : ''}${options.locationId ? `&locationId=${options.locationId}` : ''}`)
        };

        this.getClan = function (clanTag) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}`)
        };

        this.getClanMemberList = function (clanTag, options = {
            limit: ''
        }) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}/members${options.limit ? `?limit=${options.limit}` : ''}`)
        };

        this.getCurrentRiverRace = function (clanTag) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}/currentriverrace`)
        };

        this.getRiverRaceLog = function (clanTag, options = {
            limit: ''
        }) {
            if (!clanTag) throw new Error('You didn\'t provided a clan tag!');
            return fetch(apiKey, `${api_url}${base_url}/clans/${clanTag.replace('#', '%23')}/riverracelog${options.limit ? `?limit=${options.limit}` : ''}`)
        };

        this.searchTournament = function (name, options = {
            limit: ''
        }) {
            if (!name) throw new Error('You didn\'t provided a tournament name!');
            return fetch(apiKey, `${api_url}${base_url}/tournaments${name ? `?name=${name}` : ''}${options.limit ? `&limit=${options.limit}` : ''}`)
        };

        this.getTournament = function (tournamentTag) {
            if (!playerTag) throw new Error('You didn\'t provided a tournament tag!');
            return fetch(apiKey, `${api_url}${base_url}/tournaments/${tournamentTag.replace('#', '%23')}`)
        };

        this.getGlobalTournamentList = function () {
            return fetch(apiKey, `${api_url}${base_url}/globaltournaments`)
        };

        this.getLocationList = function (options = {
            limit: ''
        }) {
            return fetch(apiKey, `${api_url}${base_url}/locations${options.limit ? `?limit=${options.limit}` : ''}`)
        };

        this.getLocation = function (locationId) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}`)
        };

        this.getLocationClanRankingList = function (locationId, options = {
            limit: ''
        }) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/rankings/clans${options.limit ? `?limit=${options.limit}` : ''}`)
        };

        this.getLocationPlayerRankingList = function (locationId, options = {
            limit: ''
        }) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/rankings/players${options.limit ? `?limit=${options.limit}` : ''}`)
        };

        this.getLocationClanWarRankingList = function (locationId, options = {
            limit: ''
        }) {
            if (!locationId) throw new Error('You didn\'t provided a location id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/${locationId}/ranking/clanwars${options.limit ? `?limit=${options.limit}` : ''}`)
        };

        this.getGlobalSeasonlist = function () {
            return fetch(apiKey, `${api_url}${base_url}/locations/global/seasons`)
        };

        this.getGlobalSeason = function (seasonId) {
            if (!seasonId) throw new Error('You didn\'t provided a season id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/global/seasons/${seasonId}`)
        };

        this.getGlobalSeasonPlayerRankingList = function (seasonId, options = {
            limit: ''
        }) {
            if (!seasonId) throw new Error('You didn\'t provided a season id!');
            return fetch(apiKey, `${api_url}${base_url}/locations/global/seasons/${seasonId}/rankings/players${options.limit ? `?limit=${options.limit}` : ''}`)
        };

        this.getGlobalTournamentRankingList = function (tournamentTag, options = {
            limit: ''
        }) {
            if (!tournamentTag) throw new Error('You didn\'t provided a tournament tag!');
            return fetch(apiKey, `${api_url}${base_url}/locations/global/rankings/tournaments/${tournamentTag.replace('#', '%23')}${options.limit ? `?limit=${options.limit}` : ''}`)
        };
    };
};

module.exports = ClashRoyale;
