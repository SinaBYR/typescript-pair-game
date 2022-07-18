import img1 from './assets/img/1.jpg';
import img2 from './assets/img/2.jpg';
import img3 from './assets/img/3.jpg';
import img4 from './assets/img/4.jpg';
import img5 from './assets/img/5.jpg';

import { GameCards } from './types/index';
import { gameCard } from './components/gameCard';

const GAME_CARDS: GameCards = [
  { tag: '1', src: img1 },
  { tag: '2', src: img2 },
  { tag: '3', src: img3 },
  { tag: '4', src: img4 },
  { tag: '5', src: img5 },
  { tag: '1', src: img1 },
  { tag: '2', src: img2 },
  { tag: '3', src: img3 },
  { tag: '4', src: img4 },
  { tag: '5', src: img5 }
]

const shuffledCards = GAME_CARDS.shuffle();

export const cards = shuffledCards.map((cardInfo)  => {
  return gameCard(cardInfo);
})