import './styles.css';
import { cardComponent } from './components/card';

const main = document.querySelector('main')!;

main.appendChild(cardComponent());


const button = document.querySelector('[data-play-button]')!;

button.addEventListener('click', (e) => {
  const header = document.querySelector('header')!;

  header.classList.add('playing');
  button.classList.add('visuallyHidden');
  button.addEventListener('transitionend', e => {
    button.classList.add('hidden');
  })
})