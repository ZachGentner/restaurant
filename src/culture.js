export default renderCulture;

function renderCulture() {
    let img = document.createElement('img');
    img.setAttribute('src', './img.jpg');
    img.setAttribute('alt', 'Los Pollos Hermanos Logo');

    let h1 = document.createElement('h1');
    h1.innerText = 'Culture';

    let copy = document.createElement("div");

    let p = document.createElement('p');
    p.innerText = 'Los Pollos Hermanos knows what family tastes like and we bring that warmth and goodness into our food every single day. We always have something delicious cooking, be it our crispy fried chicken, new spicy curly fries, or delicious dipping sauces.';
    copy.appendChild(p);
    
    p = document.createElement('p');
    p.innerText = 'We know how important it is to feed your family right, and we hold those values near and dear to our heart. Every meal we feed you will be FLAVORFUL, WARM, FRESH, and filled with LOVE and CARE. That is our promise to you.'
    copy.appendChild(p);

    content.appendChild(img);
    content.appendChild(h1);
    content.appendChild(copy);
}