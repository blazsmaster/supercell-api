# supercell-api documentation

> supercell-api is a promise based api wrapper for all supercell games.

## Install
```
$ npm install supercell-api
```

## Changelog

* Changed every non-required parameters to options. 
<details>
  <summary>Example</summary>

  ### Old search method
  ```js
  .searchClan(name, (limit), (minMembers), (maxMembers), (minScore), (locationId))
  ```
  
  ### New search method
  ```js
  .searchClan(name, {
    limit: '',
    // maxMembers: '',
    // maxMembers: '',
    // minScore: '',
    // locationId: ''
  })
  ```
</details>

* Fixed spelling in example (`spercell` to `supercell`)

## Brawl Stars API

### Example

```js
const supercell = require('supercell-api');

const api = new supercell.BrawlStars('brawl stars api key here');

api.getPlayer('#XXXXXXXX').then(data => console.log(data));
```

<details>
<summary>Example output model</summary>

```json
{
  "club": {
    "tag": "string",
    "name": "string"
  },
  "isQualifiedFromChampionshipChallenge": true,
  "3vs3Victories": 0,
  "icon": {
    "id": 0
  },
  "tag": "string",
  "name": "string",
  "trophies": 0,
  "expLevel": 0,
  "expPoints": 0,
  "highestTrophies": 0,
  "powerPlayPoints": 0,
  "highestPowerPlayPoints": 0,
  "soloVictories": 0,
  "duoVictories": 0,
  "bestRoboRumbleTime": 0,
  "bestTimeAsBigBrawler": 0,
  "brawlers": [
    {
      "gadgets": [
        {
          "name": {},
          "id": 0
        }
      ],
      "starPowers": [
        {
          "name": {},
          "id": 0
        }
      ],
      "id": 0,
      "rank": 0,
      "trophies": 0,
      "highestTrophies": 0,
      "power": 0,
      "name": {}
    }
  ],
  "nameColor": "string"
}
```

</details>

<table>
    <tr>
        <th></th>
        <th>Parameters</th>
        <th>Options</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>.getPlayer()</code></td>
        <td>playerTag</td>
        <td></td>
        <td>Get information about a single player by player tag.</td>
    </tr>
    <tr>
        <td><code>.getBattleLog()</code></td>
        <td>playerTag</td>
        <td></td>
        <td>Get list of recent battle results for a player.</td>
    </tr>
    <tr>
        <td><code>.getClub()</code></td>
        <td>clubTag</td>
        <td></td>
        <td>Get information about a single clan by club tag.</td>
    </tr>
    <tr>
        <td><code>.getClubMemberList()</code></td>
        <td>clubTag, {options}</td>
        <td>llimit</td>
        <td>List club members.</td>
    </tr>
    <tr>
        <td><code>.getEventList()</code></td>
        <td></td>
        <td></td>
        <td>Get event rotation for ongoing events.</td>
    </tr>
    <tr>
        <td><code>.getBrawler()</code></td>
        <td>brawlerId</td>
        <td></td>
        <td>Get information about a brawler.</td>
    </tr>
    <tr>
        <td><code>.getBrawlerList()</code></td>
        <td>{options}</td>
        <td>limit</td>
        <td>Get list of available brawlers.</td>
    </tr>
    <tr>
        <td><code>.getPlayerRankingList()</code></td>
        <td>countryCode, {options}</td>
        <td>limit</td>
        <td>Get player rankings for a country or global rankings.</td>
    </tr>
    <tr>
        <td><code>.getClubRankingList()</code></td>
        <td>countryCode, {options}</td>
        <td>limit</td>
        <td>Get club rankings for a country or global rankings.</td>
    </tr>
    <tr>
        <td><code>.getBrawlerRankingList()</code></td>
        <td>countryCode, brawlerId, {options}</td>
        <td>limit</td>
        <td>Get brawler rankings for a country or global rankings.</td>
    </tr>
    <tr>
        <td><code>.getPowerPlaySeasonRankingList()</code></td>
        <td>countryCode, {options}</td>
        <td>limit</td>
        <td>Get power play rankings for a country or global rankings.</td>
    </tr>
</table>

## Clash Royale API

### Example

```js
const supercell = require('supercell-api');

const api = new supercell.ClashRoyale('clash royale api key here');

api.getPlayer('#XXXXXXXX').then(data => console.log(data));
```

<details>
<summary>Example output model</summary>

```json
{
  "clan": {
    "badgeId": 0,
    "tag": "string",
    "name": "string",
    "badgeUrls": {}
  },
  "arena": {
    "name": {},
    "id": 0,
    "iconUrls": {}
  },
  "role": "string",
  "wins": 0,
  "losses": 0,
  "totalDonations": 0,
  "leagueStatistics": {
    "bestSeason": {
      "trophies": 0,
      "rank": 0,
      "bestTrophies": 0,
      "id": "string"
    },
    "currentSeason": {
      "trophies": 0,
      "rank": 0,
      "bestTrophies": 0,
      "id": "string"
    },
    "previousSeason": {
      "trophies": 0,
      "rank": 0,
      "bestTrophies": 0,
      "id": "string"
    }
  },
  "cards": [
    {
      "id": 0,
      "count": 0,
      "level": 0,
      "starLevel": 0,
      "name": {},
      "maxLevel": 0,
      "iconUrls": {}
    }
  ],
  "currentFavouriteCard": {
    "iconUrls": {},
    "name": {},
    "id": 0,
    "maxLevel": 0
  },
  "badges": [
    {
      "maxLevel": 0,
      "progress": 0,
      "target": 0,
      "level": 0,
      "name": "string"
    }
  ],
  "tag": "string",
  "name": "string",
  "expLevel": 0,
  "trophies": 0,
  "bestTrophies": 0,
  "donations": 0,
  "donationsReceived": 0,
  "achievements": [
    {
      "stars": 0,
      "value": 0,
      "name": {},
      "target": 0,
      "info": {},
      "completionInfo": {}
    }
  ],
  "battleCount": 0,
  "threeCrownWins": 0,
  "challengeCardsWon": 0,
  "challengeMaxWins": 0,
  "tournamentCardsWon": 0,
  "tournamentBattleCount": 0,
  "currentDeck": [
    {
      "id": 0,
      "count": 0,
      "level": 0,
      "starLevel": 0,
      "name": {},
      "maxLevel": 0,
      "iconUrls": {}
    }
  ],
  "warDayWins": 0,
  "clanCardsCollected": 0,
  "starPoints": 0
}
```

</details>

<table>
    <tr>
        <th></th>
        <th>Parameters</th>
        <th>Options</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>.getPlayer()</code></td>
        <td>playerTag</td>
        <td></td>
        <td>Get information about a single player by player tag.</td>
    </tr>
    <tr>
        <td><code>.getUpcomingChestList()</code></td>
        <td>playerTag</td>
        <td></td>
        <td>Get list of reward chests that the player will receive next in the game.</td>
    </tr>
    <tr>
        <td><code>.getBattleLog()</code></td>
        <td>playerTag</td>
        <td></td>
        <td>Get list of recent battle results for a player.</td>
    </tr>
    <tr>
        <td><code>.getCardList()</code></td>
        <td>{options}</td>
        <td>limit</td>
        <td>Get list of available cards.</td>
    </tr>
    <tr>
        <td><code>.searchClan()</code></td>
        <td>name, {options}</td>
        <td>limit, minMembers, maxMembers, minScore, locationId</td>
        <td>Search all clans by name and/or filtering the results using various criteria.</td>
    </tr>
    <tr>
        <td><code>.getClan()</code></td>
        <td>clanTag</td>
        <td></td>
        <td>Get information about a single clan by clan tag.</td>
    </tr>
    <tr>
        <td><code>.getClanMemberList()</code></td>
        <td>clanTag, {options}</td>
        <td>limit</td>
        <td>List clan members.</td>
    </tr>
    <tr>
        <td><code>.getCurrentRiverRace()</code></td>
        <td>clanTag</td>
        <td></td>
        <td>Retrieve information about clan's current river race.</td>
    </tr>
    <tr>
        <td><code>.getRiverRaceLog()</code></td>
        <td>clanTag</td>
        <td></td>
        <td>Retrieve clan's river race log.</td>
    </tr>
    <tr>
        <td><code>.searchTournament()</code></td>
        <td>name, {options}</td>
        <td>limit</td>
        <td>Search all tournaments by name.</td>
    </tr>
    <tr>
        <td><code>.getTournament()</code></td>
        <td>tournamentTag</td>
        <td></td>
        <td>Get information about a single tournament by a tournament tag.</td>
    </tr>
    <tr>
        <td><code>.getGlobalTournammentList()</code></td>
        <td></td>
        <td></td>
        <td>Get list of global tournaments.</td>
    </tr>
    <tr>
        <td><code>.getLocationList()</code></td>
        <td>{options}</td>
        <td>limit</td>
        <td>List locations.</td>
    </tr>
    <tr>
        <td><code>.getLocation()</code></td>
        <td>locationId</td>
        <td></td>
        <td>Get information about specific location.</td>
    </tr>
    <tr>
        <td><code>.getLocationClanRankingList()</code></td>
        <td>locationId, {options}</td>
        <td>limit</td>
        <td>Get clan rankings for a specific location.</td>
    </tr>
    <tr>
        <td><code>.getLocationPlayerRankingList()</code></td>
        <td>locationId, {options}</td>
        <td>limit</td>
        <td>Get player rankings for a specific location.</td>
    </tr>
    <tr>
        <td><code>.getLocationClanWarRankingList()</code></td>
        <td>locationId, {options}</td>
        <td>limit</td>
        <td>Get clan war rankings for a specific location.</td>
    </tr>
    <tr>
        <td><code>.getGlobalSeasonList()</code></td>
        <td></td>
        <td></td>
        <td>Lists top player league seasons.</td>
    </tr>
    <tr>
        <td><code>.getGlobalSeason()</code></td>
        <td>seasonId</td>
        <td></td>
        <td>Get top player league season.</td>
    </tr>
    <tr>
        <td><code>.getGlobalSeasonPlayerRanking()</code></td>
        <td>seasonId, {options}</td>
        <td>limit</td>
        <td>Get top player rankings for a season.</td>
    </tr>
    <tr>
        <td><code>.getGlobalTournamentRanking()</code></td>
        <td>tournamentTag, {options}</td>
        <td>limit</td>
        <td>Get global tournament rankings.</td>
    </tr>
</table>

## Clash of Clans API

### Example

```js
const supercell = require('supercell-api');

const api = new supercell.ClashOfClans('clash of clans api key here');

api.getPlayer('#XXXXXXXX').then(data => console.log(data));
```

<details>
<summary>Example output model</summary>

```json
{
  "league": {
    "name": {},
    "id": 0,
    "iconUrls": {}
  },
  "clan": {
    "tag": "string",
    "clanLevel": 0,
    "name": "string",
    "badgeUrls": {}
  },
  "role": "string",
  "attackWins": 0,
  "defenseWins": 0,
  "townHallLevel": 0,
  "townHallWeaponLevel": 0,
  "versusBattleWins": 0,
  "legendStatistics": {
    "bestVersusSeason": {
      "trophies": 0,
      "id": "string",
      "rank": 0
    },
    "legendTrophies": 0,
    "currentSeason": {
      "trophies": 0,
      "id": "string",
      "rank": 0
    },
    "bestSeason": {
      "trophies": 0,
      "id": "string",
      "rank": 0
    },
    "previousSeason": {
      "trophies": 0,
      "id": "string",
      "rank": 0
    },
    "previousVersusSeason": {
      "trophies": 0,
      "id": "string",
      "rank": 0
    }
  },
  "troops": [
    {
      "level": 0,
      "name": {},
      "maxLevel": 0,
      "village": "string",
      "superTroopIsActive": true
    }
  ],
  "heroes": [
    {
      "level": 0,
      "name": {},
      "maxLevel": 0,
      "village": "string",
      "superTroopIsActive": true
    }
  ],
  "spells": [
    {
      "level": 0,
      "name": {},
      "maxLevel": 0,
      "village": "string",
      "superTroopIsActive": true
    }
  ],
  "labels": [
    {
      "name": {},
      "id": 0,
      "iconUrls": {}
    }
  ],
  "tag": "string",
  "name": "string",
  "expLevel": 0,
  "trophies": 0,
  "bestTrophies": 0,
  "donations": 0,
  "donationsReceived": 0,
  "builderHallLevel": 0,
  "versusTrophies": 0,
  "bestVersusTrophies": 0,
  "warStars": 0,
  "achievements": [
    {
      "stars": 0,
      "value": 0,
      "name": {},
      "target": 0,
      "info": {},
      "completionInfo": {},
      "village": "string"
    }
  ],
  "versusBattleWinCount": 0
}
```

</details>

<table>
    <tr>
        <th></th>
        <th>Parameters</th>
        <th>Options</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>.getPlayer()</code></td>
        <td>playerTag</td>
        <td></td>
        <td>Get information about a single player by player tag.</td>
    </tr>
    <tr>
        <td><code>.searchClan()</code></td>
        <td>name, {options}</td>
        <td>limit, minMembers, maxMembers, minClanPoints, warFrequency, locationId, labelIds</td>
        <td>Search all clans by name and/or filtering the results using various criteria.</td>
    </tr>
    <tr>
        <td><code>.getClan()</code></td>
        <td>clanTag</td>
        <td></td>
        <td>Get information about a single clan by clan tag.</td>
    </tr>
    <tr>
        <td><code>.getClanMemberList()</code></td>
        <td>clanTag, {options}</td>
        <td>limit</td>
        <td>List clan members.</td>
    </tr>
    <tr>
        <td><code>.getCurrentClanWar()</code></td>
        <td>clanTag</td>
        <td></td>
        <td>Retrieve information about clan's current clan war.</td>
    </tr>
    <tr>
        <td><code>.getClanWarLog()</code></td>
        <td>clanTag, {options}</td>
        <td>limit</td>
        <td>Retrieve clan's clan war log.</td>
    </tr>
    <tr>
        <td><code>.getClanWar()</code></td>
        <td>warTag</td>
        <td></td>
        <td>Retrieve information about individual clan war league war.</td>
    </tr>
    <tr>
        <td><code>.getCurrentClanWarGroup()</code></td>
        <td>clanTag</td>
        <td></td>
        <td>Retrieve information about clan's current clan war league group.</td>
    </tr>
    <tr>
        <td><code>.getLeagueList()</code></td>
        <td>{options}</td>
        <td>limit</td>
        <td>List leagues.</td>
    </tr>
    <tr>
        <td><code>.getLeague()</code></td>
        <td>leagueId</td>
        <td></td>
        <td>Get league information.</td>
    </tr>
    <tr>
        <td><code>.getLeagueSeasonList()</code></td>
        <td>leagueId, {options}</td>
        <td>limit</td>
        <td>Get league seasons.</td>
    </tr>
    <tr>
        <td><code>.getLeagueSeason()</code></td>
        <td>leagueId, seasonId, {options}</td>
        <td>limit</td>
        <td>Get league season rankings.</td>
    </tr>
    <tr>
        <td><code>.getWarLeagueList()</code></td>
        <td>{options}</td>
        <td>limit</td>
        <td>List war leagues.</td>
    </tr>
    <tr>
        <td><code>.getWarLeague()</code></td>
        <td>leagueId</td>
        <td></td>
        <td>Get war league information.</td>
    </tr>
    <tr>
        <td><code>.getLocationList()</code></td>
        <td>{options}</td>
        <td>limit</td>
        <td>List locations.</td>
    </tr>
    <tr>
        <td><code>.getLocation()</code></td>
        <td>locationId</td>
        <td></td>
        <td>Get information about specific location.</td>
    </tr>
    <tr>
        <td><code>.getLocationClanRankingList()</code></td>
        <td>locationId, {options}</td>
        <td>limit</td>
        <td>Get clan rankings for a specific location.</td>
    </tr>
    <tr>
        <td><code>.getLocationPlayerRankingList()</code></td>
        <td>locationId, {options}</td>
        <td>limit</td>
        <td>Get player rankings for a specific location.</td>
    </tr>
    <tr>
        <td><code>.getLocationClanVersusRankingList()</code></td>
        <td>locationId, {options}</td>
        <td>limit</td>
        <td>Get clan versus rankings for a specific location.</td>
    </tr>
    <tr>
        <td><code>.getLocationPlayerVersusRankingList()</code></td>
        <td>locationId, {options}</td>
        <td>limit</td>
        <td>Get player versus rankings for a specific location.</td>
    </tr>
    <tr>
        <td><code>.getGoldPass()</code></td>
        <td></td>
        <td></td>
        <td>Get information about the current gold pass season.</td>
    </tr>
    <tr>
        <td><code>.getPlayerLabelList()</code></td>
        <td>{options}</td>
        <td>limit</td>
        <td>List player labels.</td>
    </tr>
    <tr>
        <td><code>.getClanLabelList()</code></td>
        <td>{options}</td>
        <td>limit</td>
        <td>List clan labels.</td>
    </tr>
</table>

## Get help
<a target="_blank" href="https://discordapp.com/invite/eP5eEsdxJn">
  <img  src="https://discordapp.com/api/guilds/870337306572247082/widget.png?style=banner2">
</a>