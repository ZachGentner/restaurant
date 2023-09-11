export default renderJobs;

function renderJobs() {
    let img = document.createElement('img');
    img.setAttribute('src', './img.jpg');
    img.setAttribute('alt', 'Los Pollos Hermanos Logo');

    let h1 = document.createElement('h1');
    h1.innerText = 'Jobs';

    let copy = document.createElement("div");

    let h2 = document.createElement('h2');
    h2.innerText = "Restaurant Manager";
    copy.appendChild(h2);

    let p = document.createElement('p');
    p.innerText = 'Job Responsibilities and Duties';
    copy.appendChild(p);

    p = document.createElement('p');
    p.innerText = 'Manage, train and discipline employees';
    copy.appendChild(p);
    
    p = document.createElement('p');
    p.innerText = 'Order supplies as needed'
    copy.appendChild(p);

    p = document.createElement('p');
    p.innerText = 'Interview candidates for potential employment.'
    copy.appendChild(p);

    content.appendChild(img);
    content.appendChild(h1);
    content.appendChild(copy);
}