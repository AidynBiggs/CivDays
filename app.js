var pauseTime = 3;
var myvideo = document.getElementById("video")

if (myvideo.currentTime >= pauseTime) {
    myvideo.pause();
}