'use strict';


var info = []
var search = $('#search')
var playerName = $("#playersName")
var playersInfo = []
/* will have to search for player?
by josn or new var FirstName: and LastName:
will have fun working on this!!!


for (let i = allPlayers -1; i >= 0; i--){
  if (firstName === allPlayers[i].FirstName && lastName === allPlayers[i].LastName){
    playersInfo = allPlayers[i];
  }
}

now  I will have to sort this 

info[0][0].CurrentTeam
*/





function getPlayer() {
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
      console.log(info);

    }).catch(function (error) {

      console.log(error);
    });
}

// Need to get college stat?










/* fetch('https://sportsdata.io/developers/api-documentation/nfl#/free/season-current?format=json',
      {
        headers: ({
          "Ocp-Apim-Subscription-Key": "666e508641a04858b3f765776d45385c"

        })

      })*/