import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const time = localStorage.getItem("videoplayer-current-time");

if (time) {
  player.setCurrentTime(time);
}

const onPlay = (data) => {
localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));