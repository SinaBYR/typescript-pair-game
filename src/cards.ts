import img1 from './assets/img/1.jpg';
import img2 from './assets/img/2.jpg';
import img3 from './assets/img/3.jpg';
import img4 from './assets/img/4.jpg';
import img5 from './assets/img/5.jpg';

import { GameCards } from './types/index';
import { gameCard } from './components/gameCard';

const GAME_CARDS: GameCards = [
  { no: '1', src: img1 },
  { no: '2', src: img2 },
  { no: '3', src: img3 },
  { no: '4', src: img4 },
  { no: '5', src: img5 },
  { no: '6', src: img1 },
  { no: '7', src: img2 },
  { no: '8', src: img3 },
  { no: '9', src: img4 },
  { no: '10', src: img5 }
]

const shuffledCards = GAME_CARDS.shuffle();

export const cards = shuffledCards.map((cardInfo)  => {
  // console.log(cardInfo.src)
  return gameCard(cardInfo);
})