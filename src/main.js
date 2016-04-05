/**
 * Created by Hou on 16/4/5.
 */
console.log(1);
var media = document.getElementById('media')
function audioPlay() {
    media.play();
}
function audioPause() {
    media.pause()
}
function audioPlay(){
    if(media.paused) {
        media.play();
    } else {
        media.pause();
    }
}