/* purplepatch ad engine */

// $('.cube_templete').lMCarousel({});

var player = document.querySelector('#video-player');
var video = player.querySelector('#video');
var toggle = player.querySelector('#toggle');
var sound = player.querySelector('#sound');

var playIcon = `<i class="material-icons">play_arrow</i>`;
var pauseIcon = `<i class="material-icons">pause</i>`;
var volumeUp = `<i class="material-icons">volume_up</i>`;
var volumeOff = `<i class="material-icons">volume_off</i>`;
var replayIcon = `<i class="material-icons">replay</i>`;

function togglePlay(e) {
    e.stopPropagation();
    var playOrPause = video.paused ? 'play' : 'pause';
    video[playOrPause]();
}

function updatePlayPause(e) {
    e.stopPropagation();
    var playPauseIcon = this.paused ? playIcon : pauseIcon;             
    toggle.innerHTML = playPauseIcon;
}

function toggleSound(e) {
    e.stopPropagation();
    var soundIcon = video.muted ? volumeUp : volumeOff;
    sound.innerHTML = soundIcon;

    if (video.muted) video.muted = false;
    else video.muted = true;
}

video.addEventListener('play', updatePlayPause);
video.addEventListener('pause', updatePlayPause);
toggle.addEventListener('click', togglePlay);
sound.addEventListener('click', toggleSound);

// script 

// $('#one').click(function() {
//         $('.slide_1').addClass('hidden')
//         $('.slide_2').removeClass('hidden');
//         $('.slide_2 .element_2').removeClass('hidden').addClass('fadeInZoom');
//     });

