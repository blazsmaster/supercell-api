# supercell-api documentation

> supercell-api is a promise based api wrapper for all supercell games.

## Install
```
$ npm install supercell-api
```

## Brawl Stars API

### Usage

```js
const supercell = require('supercell-api');

const api = new spercell.BrawlStars('brawl stars api key here');

api.getPlayer('XXXXXXXX').then(data => console.log(data));
// api.getBattleLog('XXXXXXXX').then(data => console.log(data));
// api.getClub('XXXXXXXXX').then(data => console.log(data));
// api.getClubMemberList('XXXXXXXXX').then(data => console.log(data));
// api.getEventList().then(data => console.log(data));
// api.getBrawler('12345678').then(data => console.log(data));
// api.getBrawlerList().then(data => console.log(data));
// api.getPlayerRanking('xx').then(data => console.log(data));
// api.getClubRanking('xx').then(data => console.log(data));
// api.getBrawlerRanking('xx', '12345678').then(data => console.log(data));
// api.getPowerPlaySeasonRanking('xx', '1234-56').then(data => console.log(data));
```

<table>
    <tr>
        <th>Endpoint</th>
        <th>Function</th>
        <th>Example</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>.getPlayer()</code></td>
        <td>player tag without hashtag</td>
        <td><code>.getPlayer('2C9U2UULV')</code></td>
        <td>Get information about a single player by player tag.</td>
    </tr>
    <tr>
        <td><code>.getBattleLog()</code></td>
        <td>player tag without hashtag</td>
        <td><code>.getBattleLog('2C9U2UULV')</code></td>
        <td>Get list of recent battle results for a player.</td>
    </tr>
    <tr>
        <td><code>.getClub()</code></td>
        <td>club tag without hashtag</td>
        <td><code>.getClub('2G0RQJ2VQ')</code></td>
        <td>Get information about a single clan by club tag.</td>
    </tr>
    <tr>
        <td><code>.getClubMemberList()</code></td>
        <td>club tag without hashtag</td>
        <td><code>.getClubMemberList('2G0RQJ2VQ')</code></td>
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
        <td>brawler id</td>
        <td><code>.getBrawler('16000000')</code></td>
        <td>Get information about a brawler.</td>
    </tr>
    <tr>
        <td><code>.getBrawlerList()</code></td>
        <td></td>
        <td></td>
        <td>Get list of available brawlers.</td>
    </tr>
    <tr>
        <td><code>.getPlayerRanking()</code></td>
        <td>iso2 country code or global</td>
        <td><code>.getPlayerRanking('hu')</code></td>
        <td>Get player rankings for a country or global rankings.</td>
    </tr>
    <tr>
        <td><code>.getClubRanking()</code></td>
        <td>iso2 country code or global</td>
        <td><code>.getPlayerRanking('global')</code></td>
        <td>Get club rankings for a country or global rankings.</td>
    </tr>
    <tr>
        <td><code>.getBrawlerRanking()</code></td>
        <td>iso2 country code or global, brawler id</td>
        <td><code>.getPlayerRanking('hu', '16000000')</code></td>
        <td>Get brawler rankings for a country or global rankings.</td>
    </tr>
    <tr>
        <td><code>.getPowerPlaySeasonRanking()</code></td>
        <td>iso2 country code or global, season id</td>
        <td><code>.getPowerPlaySeasonRanking('hu', '2021-06')</code></td>
        <td>Get power play rankings for a country or global rankings.</td>
    </tr>
</table>

## Clash Royale API

### Usage

```js
const supercell = require('supercell-api');

const api = new spercell.ClashRoyale('clash royale api key here');

api.getPlayer('XXXXXXXX').then(data => console.log(data));
// api.getUpcomingChestList('XXXXXXXX').then(data => console.log(data));
// api.getBattleLog('XXXXXXXX').then(data => console.log(data));
// api.getCardList().then(data => console.log(data));
// api.getClan('XXXXXXXXX').then(data => console.log(data));
// api.getClanMemberList('XXXXXXXXX').then(data => console.log(data));
// api.getCurrentRiverRace('XXXXXXXXX').then(data => console.log(data));
// api.getRiverRaceLog('XXXXXXXXX').then(data => console.log(data));
// api.getTournament('XXXXXXXX').then(data => console.log(data));
// api.getGlobalTournammentList().then(data => console.log(data));
// api.getLocationList().then(data => console.log(data));
// api.getLocation('xx').then(data => console.log(data));
// api.getLocationClanRanking('xx').then(data => console.log(data));
// api.getLocationPlayerRanking('xx').then(data => console.log(data));
// api.getLocationClanWarRanking('xx').then(data => console.log(data));
// api.getGlobalSeasonList().then(data => console.log(data));
// api.getGlobalSeason('1234-56').then(data => console.log(data));
// api.getGlobalSeasonPlayerRanking('1234-56').then(data => console.log(data));
// api.getGlobalTournamentRanking('XXXXXXXX').then(data => console.log(data));
```


<table>
    <tr>
        <th>Endpoint</th>
        <th>Function</th>
        <th>Example</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>.getPlayer()</code></td>
        <td>player tag without hashtag</td>
        <td><code>.getPlayer('YL2CPJ8R8')</code></td>
        <td>Get information about a single player by player tag.</td>
    </tr>
    <tr>
        <td><code>.getUpcomingChestList()</code></td>
        <td>player tag without hashtag</td>
        <td><code>.getUpcomingChestList('YL2CPJ8R8')</code></td>
        <td>Get list of reward chests that the player will receive next in the game.</td>
    </tr>
    <tr>
        <td><code>.getBattleLog()</code></td>
        <td>player tag without hashtag</td>
        <td><code>.getBattleLog('YL2CPJ8R8')</code></td>
        <td>Get list of recent battles for a player.</td>
    </tr>
    <tr>
        <td><code>.getCardList()</code></td>
        <td></td>
        <td><code></code></td>
        <td>Get list of available cards.</td>
    </tr>
    <tr>
        <td><code>.getClan()</code></td>
        <td>clan tag without hashtag</td>
        <td><code>.getClan('2LUVCLGU9')</code></td>
        <td>Get information about a single clan by clan tag.</td>
    </tr>
    <tr>
        <td><code>.getClanMemberList()</code></td>
        <td>clan tag without hashtag</td>
        <td><code>.getClanMemberList('2LUVCLGU9')</code></td>
        <td>List clan members.</td>
    </tr>
    <tr>
        <td><code>.getCurrentRiverRace()</code></td>
        <td>clan tag without hashtag</td>
        <td><code>.getCurrentRiverRace('2LUVCLGU9')</code></td>
        <td>Retrieve information about clan's current river race.</td>
    </tr>
    <tr>
        <td><code>.getRiverRaceLog()</code></td>
        <td>clan tag without hashtag</td>
        <td><code>.getRiverRaceLog('2LUVCLGU9')</code></td>
        <td>Retrieve clan's river race log.</td>
    </tr>
    <tr>
        <td><code>.getTournament()</code></td>
        <td></td>
        <td><code>.getTournament('299VVCJC')</code></td>
        <td>Get information about a single tournament by a tournament tag.</td>
    </tr>
    <tr>
        <td><code>.getGlobalTournammentList()</code></td>
        <td></td>
        <td><code></code></td>
        <td>Get list of global tournaments.</td>
    </tr>
    <tr>
        <td><code>.getLocationList()</code></td>
        <td></td>
        <td><code></code></td>
        <td>List locations.</td>
    </tr>
    <tr>
        <td><code>.getLocation()</code></td>
        <td>iso2 county code or global</td>
        <td><code>.getLocation('hu')</code></td>
        <td>Get information about specific location.</td>
    </tr>
    <tr>
        <td><code>.getLocationClanRanking()</code></td>
        <td>iso2 county code or global</td>
        <td><code>.getLocationClanRanking('global')</code></td>
        <td>Get clan rankings for a specific location.</td>
    </tr>
    <tr>
        <td><code>.getLocationPlayerRanking()</code></td>
        <td>iso2 county code or global</td>
        <td><code>.getLocationPlayerRanking('hu')</code></td>
        <td>Get player rankings for a specific location.</td>
    </tr>
    <tr>
        <td><code>.getLocationClanWarRanking()</code></td>
        <td>iso2 county code or global</td>
        <td><code>.getLocationClanWarRanking('global')</code></td>
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
        <td>YYYY-MM format date</td>
        <td><code>.getGlobalSeason('2021-06')</code></td>
        <td>Get top player league season.</td>
    </tr>
    <tr>
        <td><code>.getGlobalSeasonPlayerRanking()</code></td>
        <td>YYYY-MM format date</td>
        <td><code>.getGlobalSeasonPlayerRanking('2021-06')</code></td>
        <td>Get top player rankings for a season.</td>
    </tr>
    <tr>
        <td><code>.getGlobalTournamentRanking()</code></td>
        <td>tournament tag without hashtag</td>
        <td><code>.getGlobalTournamentRanking('2CPC2LQR')</code></td>
        <td>Get global tournament rankings.</td>
    </tr>
</table>