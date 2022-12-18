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
  // Third place match

  {
    MatchNumber: 63,
    RoundNumber: 7,
    DateUtc: "2022-12-17 15:00:00Z",
    Location: "TBA",
    HomeTeam: "Croatia",
    AwayTeam: "Morocco",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
  },

  // Final
  {
    MatchNumber: 64,
    RoundNumber: 7,
    DateUtc: "2022-12-18 15:00:00Z",
    Location: "TBA",
    HomeTeam: "Argentina",
    AwayTeam: "France",
    Group: null,
    HomeTeamScore: null,
    AwayTeamScore: null,
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
function handleTickInit(tick) {
  var counter = Tick.count.down(new Date(selected.DateUtc), {
    format: ["h", "m", "s"],
  });
  // console.log(selected.HomeTeam)
  countryone.innerText = selected.HomeTeam;
  countrytwo.innerText = selected.AwayTeam;

  countryoneFlg.style.backgroundImage = `url(./FlagPNGs/${selected.HomeTeam}.png)`;
  countryTwoFlg.style.backgroundImage = `url(./FlagPNGs/${selected.AwayTeam}.png)`;

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

// function translteNum(num_str) {
//   var bengali = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
//   var changed_nun = "";
//   num_str.toString().split("").forEach((l) => {if (isNaN(l)) { changed_nun += l; } else { changed_nun += bengali[l];}});
//   return changed_nun;
// }
