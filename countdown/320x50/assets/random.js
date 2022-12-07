var countryone = document.getElementById("countryone");
var countrytwo = document.getElementById("countrytwo");
var countryoneFlg = document.getElementById("countryoneFlg");
var countryTwoFlg = document.getElementById("countryTwoFlg");

var MyHour = document.getElementById("MyHour");
var MyMin = document.getElementById("MyMin");
var MySec = document.getElementById("MySec");

var teamone = document.getElementById("teamone");
var teamtwo = document.getElementById("teamtwo");
var stat = document.getElementById("stat");
let data = [
  {
    DateUtc: "2022-11-29 15:00:00Z",
    data: [
      {
        MatchNumber: 35,
        RoundNumber: 3,
        DateUtc: "2022-11-29 15:00:00Z",
        Location: "Khalifa International Stadium",
        HomeTeam: "Ecuador",
        AwayTeam: "Senegal",
        Group: "Group A",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
      {
        MatchNumber: 36,
        RoundNumber: 3,
        DateUtc: "2022-11-29 15:00:00Z",
        Location: "Al Bayt Stadium",
        HomeTeam: "Netherlands",
        AwayTeam: "Qatar",
        Group: "Group A",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
    ],
  },
  {
    DateUtc: "2022-11-29 19:00:00Z",
    data: [
      {
        MatchNumber: 33,
        RoundNumber: 3,
        DateUtc: "2022-11-29 19:00:00Z",
        Location: "Ahmad Bin Ali Stadium",
        HomeTeam: "Wales",
        AwayTeam: "England",
        Group: "Group B",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
      {
        MatchNumber: 34,
        RoundNumber: 3,
        DateUtc: "2022-11-29 19:00:00Z",
        Location: "Al Thumama Stadium",
        HomeTeam: "Iran",
        AwayTeam: "USA",
        Group: "Group B",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
    ],
  },
  {
    DateUtc: "2022-11-30 15:00:00Z",
    data: [
      {
        MatchNumber: 37,
        RoundNumber: 3,
        DateUtc: "2022-11-30 15:00:00Z",
        Location: "Al Janoub Stadium",
        HomeTeam: "Australia",
        AwayTeam: "Denmark",
        Group: "Group D",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
      {
        MatchNumber: 38,
        RoundNumber: 3,
        DateUtc: "2022-11-30 15:00:00Z",
        Location: "Education City Stadium",
        HomeTeam: "Tunisia",
        AwayTeam: "France",
        Group: "Group D",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
    ],
  },
  {
    DateUtc: "2022-11-30 19:00:00Z",
    data: [
      {
        MatchNumber: 39,
        RoundNumber: 3,
        DateUtc: "2022-11-30 19:00:00Z",
        Location: "Stadium 974",
        HomeTeam: "Poland",
        AwayTeam: "Argentina",
        Group: "Group C",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
      {
        MatchNumber: 40,
        RoundNumber: 3,
        DateUtc: "2022-11-30 19:00:00Z",
        Location: "Lusail Stadium",
        HomeTeam: "SaudiArabia",
        AwayTeam: "Mexico",
        Group: "Group C",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
    ],
  },
  {
    DateUtc: "2022-12-01 15:00:00Z",
    data: [
      {
        MatchNumber: 41,
        RoundNumber: 3,
        DateUtc: "2022-12-01 15:00:00Z",
        Location: "Ahmad Bin Ali Stadium",
        HomeTeam: "Croatia",
        AwayTeam: "Belgium",
        Group: "Group F",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
      {
        MatchNumber: 42,
        RoundNumber: 3,
        DateUtc: "2022-12-01 15:00:00Z",
        Location: "Al Thumama Stadium",
        HomeTeam: "Canada",
        AwayTeam: "Morocco",
        Group: "Group F",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
    ],
  },
  {
    DateUtc: "2022-12-01 19:00:00Z",
    data: [
      {
        MatchNumber: 43,
        RoundNumber: 3,
        DateUtc: "2022-12-01 19:00:00Z",
        Location: "Khalifa International Stadium",
        HomeTeam: "Japan",
        AwayTeam: "Spain",
        Group: "Group E",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
      {
        MatchNumber: 44,
        RoundNumber: 3,
        DateUtc: "2022-12-01 19:00:00Z",
        Location: "Al Bayt Stadium",
        HomeTeam: "CostaRica",
        AwayTeam: "Germany",
        Group: "Group E",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
    ],
  },
  {
    DateUtc: "2022-12-02 15:00:00Z",
    data: [
      {
        MatchNumber: 45,
        RoundNumber: 3,
        DateUtc: "2022-12-02 15:00:00Z",
        Location: "Al Janoub Stadium",
        HomeTeam: "Ghana",
        AwayTeam: "Uruguay",
        Group: "Group H",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
      {
        MatchNumber: 46,
        RoundNumber: 3,
        DateUtc: "2022-12-02 15:00:00Z",
        Location: "Education City Stadium",
        HomeTeam: "Korea",
        AwayTeam: "Portugal",
        Group: "Group H",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
    ],
  },
  {
    DateUtc: "2022-12-02 19:00:00Z",
    data: [
      {
        MatchNumber: 47,
        RoundNumber: 3,
        DateUtc: "2022-12-02 19:00:00Z",
        Location: "Stadium 974",
        HomeTeam: "Serbia",
        AwayTeam: "Switzerland",
        Group: "Group G",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
      {
        MatchNumber: 48,
        RoundNumber: 3,
        DateUtc: "2022-12-02 19:00:00Z",
        Location: "Lusail Stadium",
        HomeTeam: "Cameroon",
        AwayTeam: "Brazil",
        Group: "Group G",
        HomeTeamScore: null,
        AwayTeamScore: null,
      },
    ],
  },
];
let selected, i;
livetime();
function livetime() {
  for (i = 0; i < data.length; i++) {
    let current = new Date();
    let check = new Date(data[i].DateUtc);
    if (check > current) {
      selected = data[i];
      break;
    }
  }
}

function randomTeam(data) {
  var i = Math.random() > 0.49 ? 1 : 0;
  var rselected = data["data"][i];
  countryone.innerText = rselected.HomeTeam;
  countrytwo.innerText = rselected.AwayTeam;
  countryoneFlg.style.backgroundImage = `url(./FlagPNGs/${rselected.HomeTeam}.png)`;
  countryTwoFlg.style.backgroundImage = `url(./FlagPNGs/${rselected.AwayTeam}.png)`;
}

function handleTickInit(tick) {
  var counter = Tick.count.down(new Date(selected.DateUtc), {
    format: ["h", "m", "s"],
  });
  if (!!selected["data"]) {
    randomTeam(selected);
  } else {
    countryone.innerText = selected.HomeTeam;
    countrytwo.innerText = selected.AwayTeam;
    countryoneFlg.style.backgroundImage = `url(./FlagPNGs/${selected.HomeTeam}.png)`;
    countryTwoFlg.style.backgroundImage = `url(./FlagPNGs/${selected.AwayTeam}.png)`;
  }

  if (data.stat == false) {
    stat.innerText = "";
  } else {
    let time = new Date(selected.DateUtc);
    stat.innerText = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  counter.onupdate = function (value) {
    tick.value = value;
  };

  counter.onended = function () {
    livetime();
    handleTickInit(tick);
  };
  function updateWCTime() {
    var kickoff = new Date(selected.DateUtc);
    var diff = kickoff - new Date();
    var dd = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hh = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((diff % (1000 * 60)) / 1000);

    var hhh = hh + dd * 24;
    var h = hhh < 10 ? "0" + hhh : hhh;
    var m = mm < 10 ? "0" + mm : mm;
    var s = ss < 10 ? "0" + ss : ss;

    MyHour.innerHTML = h;
    MyMin.innerHTML = m;
    MySec.innerHTML = s;
    setTimeout(updateWCTime, 1000);
  }
  setTimeout(updateWCTime, false);
}
