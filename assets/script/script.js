'use strict';
var players = document.querySelector('#players');
var player = document.querySelector('#player');
var teams = document.querySelector('#teams');
var position = document.querySelector('.position');
//var info = JSON.parse(localStorage.getItem('info')) || [];
var info = []
var search = $('#search');
var playerName = $("#playersName");
var playersInfo = []
var list = document.createElement('li');
/* will have to search for player?
by josn or new var FirstName: and LastName:
will have fun working on this!!!
*/


function getPlayers(list) {
  var key = list.id
  players.innerHTML = ""
  for (let i = info[0].length - 1; i >= 0; i--) {

    console.log(key + ' ' + info[0][i].Team)
    if (key === info[0][i].Team) {

      list = document.createElement('li')
      list.innerText = info[0][i].FirstName + ' ' + info[0][i].LastName;
      list.setAttribute('Onclick', 'getPlayer(this)');
      list.setAttribute('id', JSON.stringify(info[0][i]));
      players.appendChild(list)
    }

  }
}
function getPlayer(list) {
  var person = JSON.parse(list.id);
  console.log(person);
  person.innerHTML = ""
  var pic = document.createElement('img');
  pic.src = person.PhotoUrl;
  player.appendChild(pic);
  list = document.createElement('li');
  list.innerText = person.FirstName + ',' + person.LastName + '  #' + person.Number;
  player.appendChild(list);
  list = document.createElement('li');
  list.innerText = "Position-" + person.FantasyPosition;
  player.appendChild(list);

}

function getPosition() {
  console.log(position.value)

  players.innerHTML = ""
  for (let i = info[0].length - 1; i >= 0; i--) {

    if (position.id === info[0][i].Position) {

      list = document.createElement('li')
      list.innerText = info[0][i].FirstName + ' ' + info[0][i].LastName;
      list.setAttribute('Onclick', 'getPlayer(this)');
      list.setAttribute('id', JSON.stringify(info[0][i]));
      players.appendChild(list)
    }

  }
}

/*
Active: true
Age: 26
AverageDraftPosition: 30.6
BirthDate: "1994-08-03T00:00:00"
BirthDateString: "August 3, 1994"
ByeWeek: 10
College: "Georgia"
CollegeDraftPick: 11
CollegeDraftRound: 1
CollegeDraftTeam: "LAR"
CollegeDraftYear: 2015
CurrentStatus: "Scrambled"
DeclaredInactive: false
DepthDisplayOrder: 3
DepthOrder: 1
DepthPosition: "Scrambled"
DepthPositionCategory: "Scrambled"
DraftKingsName: "Todd Gurley II"
DraftKingsPlayerID: 694641
Experience: 8
ExperienceString: "6th Season"
FanDuelName: "Todd Gurley II"
FanDuelPlayerID: 30447
FantasyAlarmPlayerID: 303658
FantasyDraftName: "Todd Gurley II"
FantasyDraftPlayerID: 694641
FantasyPosition: "RB"
FantasyPositionDepthOrder: 1
FirstName: "Todd"
GlobalTeamID: 2
Height: "6'1""
HeightFeet: 6
HeightInches: 1
InjuryBodyPart: "Scrambled"
InjuryNotes: "Scrambled"
InjuryPractice: "Scrambled"
InjuryPracticeDescription: "Scrambled"
InjuryStartDate: null
InjuryStatus: "Scrambled"
IsUndraftedFreeAgent: false
LastName: "Gurley II"
Name: "Todd Gurley II"
Number: 21
PhotoUrl: "https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/16771.png"
PlayerID: 16771
Position: "RB"
PositionCategory: "OFF"
RotoWirePlayerID: 10147
RotoworldPlayerID: 10288
ShortName: "T.Gurley II"
SportRadarPlayerID: "14263792-d1d3-4b0c-85f7-2a85b4aed6f1"
SportsDirectPlayerID: 58301
StatsPlayerID: 694641
Status: "Active"
Team: "ATL"
TeamID: 2
UpcomingDraftKingsSalary: null
UpcomingFanDuelSalary: null
UpcomingGameOpponent: "NO"
UpcomingGameWeek: 11
UpcomingOpponentPositionRank: 4
UpcomingOpponentRank: 18
UpcomingSalary: 7111
UsaTodayHeadshotNoBackgroundUpdated: "2020-08-04T18:32:44"
UsaTodayHeadshotNoBackgroundUrl: "http://cdn.usatsimg.com/api/download/?imageID=14694448"
UsaTodayHeadshotUpdated: "2019-12-13T09:38:20"
UsaTodayHeadshotUrl: "http://cdn.usatsimg.com/api/download/?imageID=13787729"
UsaTodayPlayerID: 7180116
Weight: 224
XmlTeamPlayerID: null
YahooName: "Todd Gurley"
YahooPlayerID: 28398
*/




function getInfo() {
  //if (info !== []) {
  // showInfo()
  //}
  Promise.all([
    fetch('https://api.sportsdata.io/v3/nfl/scores/json/Players?format=json',
      {
        headers: ({
          "Ocp-Apim-Subscription-Key": "666e508641a04858b3f765776d45385c"
        })

      }),
    fetch('https://api.sportsdata.io/v3/nfl/scores/json/Teams?format=json',
      {
        headers: ({
          "Ocp-Apim-Subscription-Key": "666e508641a04858b3f765776d45385c"
        })
      }),

  ]).then(function (responses) {
    return Promise.all(responses.map(function (response) {
      return response.json();
    }));
  })
    .then(function (json) {
      info = json
      // localStorage.setItem('info', JSON.stringify(json))
      console.log(info);
      for (let i = 0; i < info[1].length; i++) {
        list = document.createElement('li')
        list.innerText = info[1][i].City + ' ' + info[1][i].Name;
        list.setAttribute('Onclick', 'getPlayers(this)');
        list.setAttribute('id', info[1][i].Key);
        teams.appendChild(list)

      }

      //showInfo()
    }).catch(function (error) {

      console.log(error);
    });
}
getInfo()

function showInfo() {
  console.log(info);
  for (let i = 0; i < info[1].length; i++) {
    list = document.createElement('li')
    list.innerText = info[1][i].City + ' ' + info[1][i].Name;
    list.setAttribute('Onclick', 'getPlayers(this)');
    list.setAttribute('id', info[1][i].Key);
    teams.appendChild(list)


  }
}
// Need to get college stat?

/*
for (let i = info[0].lenght - 1; i >= 0; i--) {
    if (firstName === info[0][i].FirstName && lastName === info[0][i].LastName) {
      playersInfo = info[0][i];
    }

  }

*/








/* fetch('https://sportsdata.io/developers/api-documentation/nfl#/free/season-current?format=json',
      {
        headers: ({
          "Ocp-Apim-Subscription-Key": "666e508641a04858b3f765776d45385c"

        })

      })*/