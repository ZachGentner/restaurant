export default renderHome;

const content = document.getElementById('content');

function renderHome() {
    let img = document.createElement('img');
    img.setAttribute('src', './img.jpg');
    img.setAttribute('alt', 'Los Pollos Hermanos Logo');

    let h1 = document.createElement('h1');
    h1.innerText = 'Los Pollos Hermanos';

    let p = document.createElement('p');
    p.innerText = 'Los Pollos Hermanos is a fast-growing casual family restaurant founded by Gus Fring and his business partner Max Arciniega. Together, the "chicken brothers" made a name for themselves and their small-town eatery by using authentic flavors and spices to make the tastiest chicken south of the border.'
    


    content.appendChild(img);
    content.appendChild(h1);
    content.appendChild(p);
}