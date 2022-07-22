import './styles.css';

const button = document.querySelector('[data-play-button]')!;
const main = document.querySelector('main')!;

button.addEventListener('click', (e) => {
  const header = document.querySelector('header')!;
  
  header.classList.add('playing');
  button.classList.add('visuallyHidden');
  button.addEventListener('transitionend', e => {
    button.classList.add('hidden');
  })

  main.classList.remove('hidden');

  import('./cards').then(module => {    
    module.cards.forEach((card, index) => {
      // Animation delay starts from 500ms, because removing hidden class from main tag takes a bit.
      // To avoid interfering these two, it'll start from 500ms.
      card.style.animationDelay = `${500 + index * 250}ms`;
      main.appendChild(card);
    })
  })

})