import { getEl, getEls, forEach } from '@superskrypt/sutils';
import initDashboardHiding from "./dashboardHide"
import { animateMap, activatePhase } from "./map";

var introButton = getEl('.intro--button');

var initialPhase = getInitialPhase();

function getInitialPhase() {
    let hashes = window.location.hash.split("#");

    if (hashes.length == 1) {
        return false;
    }

    let phaseToInit = getEl(`.phases--phase[data-phase-name=${hashes[1]}]`);
    let placeToInit = getEl(`.map--place[data-link="/place/${hashes[2]}/"`);

    if (!phaseToInit) {
        return false;
    }

    return {
        phase: phaseToInit.dataset.phase,
        place: placeToInit
    };
}

if (!initialPhase && introButton) {
    prepareIntro();
} else {
    animateInitialPhase(initialPhase);
}
getEl('body').style.opacity = '1';

function prepareIntro() {
    getEl('body').classList.add('intro-on');
    animateMap('0');
    getEl('.map').style.opacity = 1;
    introButton.onclick = onIntroButtonClick;
    getEl('body').classList.add('home__visible');
}

function animateInitialPhase(initialPhase) {
    animateMap(initialPhase.phase);
    removeIntro();
    setTimeout(() => {
        removeIntroActivatePhase(initialPhase.phase);
        getEl('body').classList.add('home__visible');
    }, 100);

    if (initialPhase.place) {
        setTimeout(() => initialPhase.place.click(), 2000);
    }
}

function onIntroButtonClick() {

    getEl('.intro--button').classList.add('clicked');
    getEl('.intro--hero').style.opacity = 0;
    getEl('.intro--lead').style.opacity = 0;

    setTimeout(() => {
        getEl('.intro--background').style.borderWidth = '0';
        getEl('.intro--background-2').style.opacity = 0;

        setTimeout(() => {
            removeIntroActivatePhase('2', 2000, 700);
        }, 1300);

    }, 300);
}

function removeIntro() {
    if (getEl('.intro')) {
        getEl('.intro').style.opacity = 0;
        getEl('.intro').remove();
        getEl('.intro--background-2').remove();
    }
}

function removeIntroActivatePhase(phase, delay, delay2) {
    if (delay2)
        setTimeout(removeIntro, delay2);
    else
        removeIntro();

    getEl('body').classList.add('map-active');
    getEl('body').classList.add('map-animations-active');
    activatePhase(phase, delay);
    initDashboardHiding();
}
