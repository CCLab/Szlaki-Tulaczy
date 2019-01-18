import { getEl } from '@superskrypt/sutils';

function hideDashboard() {
    getEl('main .dashboard').classList.add('dashboard__hidden');
}

function unhideDashboard() {
    getEl('main .dashboard').classList.remove('dashboard__hidden');
}

export default function initDashboardHiding() {
    let dashboard = getEl('main .dashboard');

    setTimeout(() => getEl('main .dashboard').style.transitionDelay = '0.01s', 2000);

    getEl('.map-container').addEventListener('mousemove', (e) => {
        if (e.x <= dashboard.clientWidth) {
            if (!dashboard.classList.contains('dashboard__hidden')) {
                hideDashboard();
            }
        } else {
            if (dashboard.classList.contains('dashboard__hidden')) {
                unhideDashboard();
            }
        }
    } );
}

