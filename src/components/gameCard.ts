import './gameCard.css';
import { selectCard, pause } from '../game';

type Props = {
  tag: string;
  src: any;
}

export function gameCard({ tag, src }: Props) {
  const card = document.createElement('div');
  const wrapper = document.createElement('div');
  const front = document.createElement('div');
  const back = document.createElement('div');

  card.classList.add('gameCard');
  wrapper.classList.add('wrapper');
  front.classList.add('front');
  back.classList.add('back');

  back.style.backgroundImage = `url(${src})`;

  card.setAttribute('data-card-tag', tag);

  // To read more about "pause" variable, please refer to game.ts file.
  card.onclick = () => !pause && selectCard(card);

  wrapper.appendChild(front);
  wrapper.appendChild(back);
  card.appendChild(wrapper);

  return card;
}