const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');
let timesClicked = 0;
let liked = 0;
let clicks = 0;

loveMe.addEventListener('click', (e) => dblClick(e));

function dblClick(e) {
  clicks++;
  setTimeout(() => clicks = 0, 800);
  if (clicks === 2) {
    addLike(e);
    clicks == 0;
  }
}

function addLike(e) {
  const { clientX, clientY } = e,
        { offsetLeft, offsetTop } = e.target;
  const xInside = clientX - offsetLeft;
  const yInside = clientY - offsetTop;

  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  times.innerHTML = ++timesClicked

  setTimeout(() => loveMe.removeChild(heart), 600);
}