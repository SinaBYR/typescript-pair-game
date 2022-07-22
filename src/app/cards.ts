import { GameCards } from '../types/index';
import { gameCard } from '../components/gameCard/gameCard';
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';
import img5 from '../assets/img/5.jpg';

const GAME_CARDS: GameCards = [
  { id: '1', tag: '1', src: img1 },
  { id: '2', tag: '2', src: img2 },
  { id: '3', tag: '3', src: img3 },
  { id: '4', tag: '4', src: img4 },
  { id: '5', tag: '5', src: img5 },
  { id: '6', tag: '1', src: img1 },
  { id: '7', tag: '2', src: img2 },
  { id: '8', tag: '3', src: img3 },
  { id: '9', tag: '4', src: img4 },
  { id: '10', tag: '5', src: img5 }
];

function renderCards(parrentElement: HTMLElement) {
  const shuffledCards = GAME_CARDS.shuffle();

  const cards = shuffledCards.map((cardInfo)  => {
    return gameCard(cardInfo);
  });
  
  cards.forEach((card, index) => {
    // Animation delay starts from 500ms, because removing hidden class from main tag takes a bit.
    // To avoid interfering these two, it'll start from 500ms.
    card.style.animationDelay = `${500 + index * 250}ms`;
    parrentElement.appendChild(card);
  })
};

export { renderCards };