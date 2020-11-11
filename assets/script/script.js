'use strict';
var players = document.querySelector('#players')
var teams = document.querySelector('#teams')
var info = []
var search = $('#search')
var playerName = $("#playersName")
var playersInfo = []
var list = document.createElement('li');
/* will have to search for player?
by josn or new var FirstName: and LastName:
will have fun working on this!!!
*/


function getPlayer(list) {
  var key = list.id
  players.innerHTML = ""
  for (let i = info[0].length - 1; i >= 0; i--) {

    console.log(key + ' ' + info[0][i].Team)
    if (key === info[0][i].Team) {

      list = document.createElement('li')
      list.innerText = info[0][i].FirstName + ' ' + info[0][i].LastName;
      players.appendChild(list)
    }

  }
}
//now  I will have to sort this 









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
        list = document.createElement('li')
        list.innerText = info[1][i].City + ' ' + info[1][i].Name;
        list.setAttribute('Onclick', 'getPlayer(this)');
        list.setAttribute('id', info[1][i].Key);
        teams.appendChild(list)


      }
    }).catch(function (error) {

      console.log(error);
    });
}
getInfo()
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