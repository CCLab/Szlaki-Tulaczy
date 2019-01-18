import { getEl, getEls, forEach } from '@superskrypt/sutils';

getEl('.menu .hamburger').onclick = onMenuClick;

function onMenuClick() {
    getEl('.menu').classList.toggle('active')
}
