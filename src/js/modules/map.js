import { getEl, getEls, forEach } from '@superskrypt/sutils';

forEach(getEls('.phases--phase'), el => el.onclick = onPhaseClick);

function onPhaseClick() {
    var phase = this.dataset.phase
    var oldActivePhase = getActivePhase();
    if (!oldActivePhase || oldActivePhase.dataset.phase != phase) {
        activatePhase(phase);
    }
}

export function activatePhase(phase, delayPlaceAnimation = 0) {
    setTimeout(() => {
        forEach(getEls('.phases--phase'), el => el.classList.remove('active'));
        getEl(`.phases--phase[data-phase='${phase}']`).classList.add('active')

        showPoints(phase)
        showDashboard(phase)

        // FIXME
        getEl('.details').classList.remove('active');
        getEl('.details').dataset.active = '';
        var mapPlaceActive = getEl('.map--place__active')
        if (mapPlaceActive) mapPlaceActive.classList.remove('map--place__active');
        setTimeout(()=>history.replaceState(null, "", `#${getActivePhase().dataset.phaseName}`), 100);

    }, delayPlaceAnimation);
    animateMap(phase)
}

function showDashboard(phase) {
    forEach(getEls('.dashboard--phase'), el => {
        el.classList.remove('active')
    })

    getEl(`.dashboard--phase[data-phase='${phase}']`).classList.add('active')
}

function showPoints(phase) {
    forEach(getEls('.map--phase'), el => {
        el.classList.remove('activeExit')
        el.classList.remove('activeEntry')
    })

    getEl(`.map--phase[data-phase='${phase-1}']`).classList.add('activeExit')
    getEl(`.map--phase[data-phase='${phase}']`).classList.add('activeEntry')

}

export function animateMap(phase) {
    switch (phase) {
        case '0':
            var scale = getScale(5000, 1500);
            var center = { x: -10, y: 0 };
            break;
        case '2':
            var scale = getScale(1400, 300);
            var center = {x:-27, y:-30}
            break;
        case '3':
            var scale = getScale(1100, 500);
            var center = {x:-26, y:-27}
            break;
        case '4':
            var scale = getScale(650, 400);
            var center = {x:-28, y:-15}
            break;
        case '5':
            var scale = getScale(5000, 1500);
            var center = {x:-13, y:0}
            break;
    }

    var map = getEl('.map');
    map.style.transform = `scale(${scale}) translate(${-50-center.x}%, ${-50-center.y}%)`
    map.style.fontSize = `calc(1em / ${scale})`
}

function getScale(visibleW, visibleH) {
    var scaleX = window.innerWidth / visibleW;
    var scaleY = window.innerHeight / visibleH;

    return Math.min(scaleX, scaleY);
}

window.addEventListener("resize", onResize);

function onResize() {
    var activePhase = getActivePhase();
    if (activePhase) animateMap(activePhase.dataset.phase);
}

function getActivePhase() {
    return getEl('.phases--phase.active');
}

function createPaths() {
    createPathsForPhase(2)
    createPathsForPhase(3)
    createPathsForPhase(4)
    createPathsForPhase(5)
}
function createPathsForPhase(phase) {
    var froms = getEls(`.map--phase[data-phase='${phase-1}'] .map--place`)
    var tos = getEls(`.map--phase[data-phase='${phase}'] .map--place`)
    forEach(froms, createPathsForExit(tos))
}
function createPathsForExit(tos) {
    return function (from) {
        forEach(tos, to => {
            from.appendChild(createPathElement(from, to))
        })
    }
}
function createPathElement(from, to) {
    var path = document.createElement('div')
    path.classList.add('map--path')

    var offsetTop = to.offsetTop - from.offsetTop
    var offsetLeft = to.offsetLeft - from.offsetLeft
    var deg = Math.atan2(offsetTop, offsetLeft) * 180 / Math.PI
    var dist = Math.sqrt(offsetTop * offsetTop + offsetLeft * offsetLeft)
    path.style.transform = `rotate(${deg}deg) translate(0, -50%)`
    path.style.width = `${dist - to.offsetWidth/2 - 28}px`
    path.style.height = from.style.width
    return path
}
createPaths()
