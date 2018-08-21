import { getEl, getEls, forEach } from '@superskrypt/sutils';

forEach(getEls('.phases--phase'), el => el.onclick = onPhaseClick);

function onPhaseClick() {
    var phase = this.dataset.phase
    activatePhase(phase)
}

function activatePhase(phase) {
    forEach(getEls('.phases--phase'), el => el.classList.remove('active'));
    getEl(".phases--phase[data-phase='" + phase + "']").classList.add('active')

    showPoints(phase)
    showDashboard(phase)

    animateMap(phase)
}

activatePhase('1')

function showDashboard(phase) {
    forEach(getEls('.dashboard--phase'), el => {
        el.classList.remove('active')
    })

    getEl(".dashboard--phase[data-phase='" + (phase) + "']").classList.add('active')
}

function showPoints(phase) {
    forEach(getEls('.map--phase'), el => {
        el.classList.remove('activeExit')
        el.classList.remove('activeEntry')
    })

    getEl(".map--phase[data-phase='" + (phase-1) + "']").classList.add('activeExit')
    getEl(".map--phase[data-phase='" + phase + "']").classList.add('activeEntry')

}

function animateMap(phase) {
    switch (phase) {
        case '1':
            var scale = getScale(450);
            var center = {x:9, y:-13}
            break;
        case '2':
            var scale = getScale(550);
            var center = {x:16, y:-13}
            break;
        case '3':            
            var scale = getScale(300);
            var center = {x:9, y:-2}
            break;
        case '4':
            var scale = getScale(800);
            var center = {x:5, y:8}
            break;
    }

    var map = getEl('.map');
    map.style.transform = 'scale('+scale+') translate(' + (-50-center.x) + '%,' + (-50-center.y) + '%)';
}

function getScale(visibleH) {
    const mapH = 1546
    const mapW = 2000

    var scale = window.innerHeight  / visibleH;
    
    return scale;
}

window.addEventListener("resize", onResize);

function onResize() {
    animateMap(getActivePhase())
}

function getActivePhase() {
    return getEl('.phases--phase.active').dataset.phase
}

function createPaths() {
    createPathsForPhase(1)
    createPathsForPhase(2)
    createPathsForPhase(3)
    createPathsForPhase(4)
}
function createPathsForPhase(phase) {
    var froms = getEls(".map--phase[data-phase='" + (phase-1) + "'] .map--place")
    var tos = getEls(".map--phase[data-phase='" + phase + "'] .map--place")
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
    console.log(from.width);
    
    var offsetTop = to.offsetTop - from.offsetTop
    var offsetLeft = to.offsetLeft - from.offsetLeft
    var deg = Math.atan2(offsetTop, offsetLeft) * 180 / Math.PI
    var dist = Math.sqrt(offsetTop * offsetTop + offsetLeft * offsetLeft)    
    path.style.transform = "rotate(" + deg + "deg) translate(0, -50%)"
    path.style.width = "" + (dist - to.offsetWidth/2 - 30) + "px"
    path.style.height = from.style.width
    return path
}
createPaths()
