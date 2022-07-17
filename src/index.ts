import './styles.css';
import { cards } from './cards';

const button = document.querySelector('[data-play-button]')!;
const main = document.querySelector('main')!;

button.addEventListener('click', (e) => {
  const header = document.querySelector('header')!;
  
  header.classList.add('playing');
  button.classList.add('visuallyHidden');
  button.addEventListener('transitionend', e => {
    button.classList.add('hidden');
  })
})

cards.forEach(card => {
  main.appendChild(card)
})