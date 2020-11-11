'use strict';

var teams = document.querySelector('#teams')
var info = []
var search = $('#search')
var playerName = $("#playersName")
var playersInfo = []
/* will have to search for player?
by josn or new var FirstName: and LastName:
will have fun working on this!!!


for (let i = info[0].lenght -1; i >= 0; i--){
  if (firstName ===info[0][i].FirstName && lastName === info[0][i].LastName){
    playersInfo = info[0][i];
  }
}

now  I will have to sort this 

info[0][0].CurrentTeam
*/





function getInfo() {
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
      for (let i = 0; i < info[1].length; i++) {
        var list = document.createElement('li')
        list.innerText = info[1][i].City + ' ' + info[1][i].Name;
        teams.appendChild(list)

      }
    }).catch(function (error) {

      console.log(error);
    });
}
getInfo()
// Need to get college stat?










/* fetch('https://sportsdata.io/developers/api-documentation/nfl#/free/season-current?format=json',
      {
        headers: ({
          "Ocp-Apim-Subscription-Key": "666e508641a04858b3f765776d45385c"

        })

      })*/