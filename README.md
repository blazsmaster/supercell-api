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

<details>
<summary>Edpoints</summary>
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