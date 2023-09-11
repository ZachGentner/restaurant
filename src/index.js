//Inspiration taken from the AMC promotational website: http://www.lphishiring.com/training/

import renderHome from './home.js';
import renderJobs from './jobs.js';
import renderCulture from './culture.js';
import clear from './clear.js';

const content = document.getElementById('content');
const home = document.getElementById('home');
const jobs = document.getElementById('jobs');
const culture = document.getElementById('culture');

window.addEventListener('load', renderHome());
home.addEventListener('mousedown', () => {
    clear();
    renderHome();
});

jobs.addEventListener('mousedown', () => {
    clear();
    renderJobs();
});

culture.addEventListener('mousedown', () => {
    clear();
    renderCulture();
});