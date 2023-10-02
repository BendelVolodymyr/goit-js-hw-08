//npm
import Player from '@vimeo/player'; //підключення бібліотеки плеєра
//npm
import throttle from 'lodash.throttle'; // підключення бібліотеки

const iframe = document.querySelector('iframe'); // програвач в HTML

const player = new Player(iframe);
const onPlay = function (data) {
    localStorage.setItem(LOCAL_KEY, data.seconds);// додаваня в локал кеш теперишній час відео ( ключ 'videoplayer-current-time')
};
player.on('timeupdate', throttle(onPlay, 1000));//подія оновлення часу + бібліотека оновлення кожні 1000 ms
const LOCAL_KEY = 'videoplayer-current-time'; // LOCAL_KEY
const time = localStorage.getItem(LOCAL_KEY); // час який збережений в локал кеш

player.setCurrentTime(time).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
document.body.style.cssText = `
display: flex;
flex-direction:column;
row-gap: 40px;
`;

const newButton = document.createElement('button');
newButton.textContent = 'Clear cache';
newButton.setAttribute('type', 'button');
newButton.classList.add('btn');
newButton.style.cssText = `
        width: 100px;
height: 100px;
color: #3a86ff;
font-size: 20px;
background-color: #8ecae6;
border: none;
border-radius: 10px;
box-shadow: 1px 1px #888888;
`;
iframe.after(newButton);

const button = document.querySelector('button');
const clearCache = () => {
    localStorage.removeItem(LOCAL_KEY);
};
button.addEventListener('click', clearCache);// подія слік на чищення локал кешу