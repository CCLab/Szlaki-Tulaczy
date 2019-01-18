import { getEl, getEls, forEach } from '@superskrypt/sutils';
import Siema from 'siema';

forEach(getEls('.map--place'), e => e.onclick = onMapPlaceClick);
getEl('.details--hide').onclick = detailsClose;

function onMapPlaceClick() {
    var link = this.dataset.link;

    if (isDetailsOpenForPoint(link)) {
        detailsClose();
    } else {
        var type = this.parentNode.classList.contains('activeEntry') ? 'entry' : 'exit';

        if (isDetailsOpen()) detailsClose();
        setTimeout(() => detailsOpen(link, type), 300);
    }
}

function detailsClose() {
    getEl('.details').classList.remove('active');
    getEl('.details').dataset.active = '';
    let activePlace = getEl('.map--place__active');
    if (activePlace) activePlace.classList.remove('map--place__active');
    let newLocation = window.location.hash.split('#')[1];
    history.replaceState(null, "", `#${newLocation}`);
}

function detailsOpen(link, type) {
    getEl('.details').dataset.active = link;
    getEl('.details').dataset.type = type;
    var oldActive = getEl('.map--place__active');
    if (oldActive) oldActive.classList.remove('map--place__active');
    getEl(`.map--place[data-link="${link}"]`).classList.add('map--place__active');

    getEl('.details--content').innerHTML = placesDetails[link];
    eventBus.trigger('audio:register');

    getEl('.details').classList.add('active');
    getEl('.details').scrollTo(0, 0);

    forEach(getEls('.details.active .details--gallery'), gallery => {
        var siema = new Siema({
            selector: getEl('.details--gallery--content', gallery),
            loop: true,
            perPage: 1,
        });

        getEl('.details--gallery--previous', gallery).onclick = () => siema.prev();
        getEl('.details--gallery--next', gallery).onclick = () => siema.next();
    });

    if (window.location.hash.split('#').length == 2) {
        history.replaceState(null, "", window.location.hash + `#${link.split('/')[2]}`);
    }
}

function isDetailsOpenForPoint(link) {
    return getEl('.details').dataset.active == link;
}
function isDetailsOpen() {
    return getEl('.details').dataset.active != "";
}

forEach(getEls('.map--place'), getDetailsForPlace);

window.placesDetails = {};

function getDetailsForPlace(el) {
    var link = el.dataset.link;

    var request = new XMLHttpRequest();
    request.open('GET', link, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var resp = request.responseText;
            placesDetails[link] = resp;
        } else {
        }
    };
    request.onerror = function() {
    };

    request.send();

}
