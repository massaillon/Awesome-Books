/* Constants declarations for the Mobile menu */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function mobileMenu() {
  /* Open the menu and and change the Hamburger to a X on click */
  if (navMenu.classList.contains('hide')) {
    navMenu.classList.remove('hide');
    hamburger.classList.toggle('active');
  } else {
    navMenu.classList.add('hide');
    hamburger.classList.toggle('active');
  }
}
hamburger.addEventListener('click', mobileMenu);
/* For closing navigation on the click of each link */
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.add('hide');
  hamburger.toggle('bar active');
}));

/* Dynamic Feature speaker */
/* Constants declarations for Dynamic Feature speaker */
const more = document.querySelector('.featured-speaker-more-button');
const dynamicSpeaker = document.querySelector('.featured-speaker-stack-container-2');

/* Function for making dynamic the feature section */

function moreFeature() {
  /* Open the the remaining featured speaker on click */
  if (dynamicSpeaker.classList.contains('hide')) {
    dynamicSpeaker.classList.remove('hide');
  } else {
    dynamicSpeaker.classList.add('hide');
  }
}
/* Add an event Listener for the action to be performed */

more.addEventListener('click', moreFeature);