import './styles.css';

const button = document.querySelector('[data-play-button]')!;

button.addEventListener('click', (e) => {
  const header = document.querySelector('header')!;

  header.classList.add('playing');
  button.classList.add('visuallyHidden');
  button.addEventListener('transitionend', e => {
    button.classList.add('hidden');
  })
})