import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
const btnVideo = document.querySelector('#btnVideo');
const btnClose = document.querySelector('#btnClose');
const btnPlay = document.querySelector('#btnPlay');
const videoPopup = document.querySelector('.video-popup');
const video = document.querySelector('#videoPlayer');

btnVideo.onclick = function() {
  videoPopup.classList.toggle('video-popup--active');
};

btnClose.onclick = function() {
  videoPopup.classList.toggle('video-popup--active');
  btnPlay.classList.remove('btn-close');
  video.pause();
};

btnPlay.onclick = function() {
  video.play();
  btnPlay.classList.add('btn-close');
};

//
const items = document.querySelectorAll(".quiz-choice");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  const itemVictory = this.getAttribute('data-victory');

  // for (let i = 0; i < items.length; i++) {
  //   items[i].setAttribute('aria-expanded', 'false');
  // }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }

  if (itemVictory == 'true') {
    this.classList.add('quiz-choice--victory')
  } else {
    this.classList.add('quiz-choice--loss')
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));