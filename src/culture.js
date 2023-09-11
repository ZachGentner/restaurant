export default renderCulture;

function renderCulture() {
    let img = document.createElement('img');
    img.setAttribute('src', './img.jpg');
    img.setAttribute('alt', 'Los Pollos Hermanos Logo');

    let h1 = document.createElement('h1');
    h1.innerText = 'Los Pollos Hermanos';

    let p = document.createElement('p');
    p.innerText = 'Culture';

    content.appendChild(img);
    content.appendChild(h1);
    content.appendChild(p);
}