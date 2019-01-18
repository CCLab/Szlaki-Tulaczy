import { getEl, getEls, forEach, getClosest } from '@superskrypt/sutils';

eventBus.on('audio:register', () => {

    forEach(getEls('.audio'), el => {

        el.onclick = onAudioClick;
        var audio = getEl('audio', el);

        audio.addEventListener( "ended", function() {
            stopAudio( el, audio);
        });

        audio.addEventListener('loadedmetadata', function() {
            getEl('.audio--time', el).innerText = getDurationString(audio.duration);
            getEl('.audio--duration', el).innerText = getDurationString(audio.duration);
        }, false);

        el.addEventListener("timeupdate", function (e) {
            var s = Math.round(e.target.currentTime);
            getEl('.audio--time', this).innerText = getDurationString(s);
        }, true);

    });

});

function getDurationString(duration) {
    let sec = Math.round(duration);
    let min = sec >= 60 ? `${~~(sec / 60)}' ` : '';

    return `[${min}${sec % 60}"]`;
}

function onAudioClick(e) {
    let audio = getEl('audio', this);
    if ( e.target.classList.contains('svg-icon') ) {
        playAudio( this, audio );
    }
    if ( e.target.classList.contains('audio--stop') ) {
        stopAudio( this, audio );
    }

}

function playAudio( audioContainer, audio) {

    audioContainer.classList.toggle('audio__playing');

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

}

function stopAudio( audioContainer, audio) {

    // if (!audio.paused) {
        audio.currentTime = 0
        audio.pause();
        audioContainer.classList.remove('audio__playing');
    // }

}
