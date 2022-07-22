import './styles.css';

const playButton = document.querySelector('[data-play-button]')!;

playButton.addEventListener('click', (e) => {
  const header = document.querySelector('header')!;
  const container = document.querySelector('[data-container]') as HTMLElement;
  
  header.classList.add('playing');
  playButton.classList.add('visuallyHidden');
  playButton.addEventListener('transitionend', e => {
    playButton.classList.add('hidden');
  })

  container.classList.remove('hidden');
  import('./app/cards').then(value => value.renderCards(container));
})