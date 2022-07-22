import './gameCard.css';
import { selectCard, pause } from '../game';

type Props = {
  id: string;
  tag: string;
  src: any;
}

export function gameCard({ id, tag, src }: Props) {
  const card = document.createElement('div');
  const wrapper = document.createElement('div');
  const front = document.createElement('div');
  const back = document.createElement('div');

  card.classList.add('gameCard');
  // fade-in class takes care of landing animation of card.
  card.classList.add('fade-in');
  wrapper.classList.add('wrapper');
  front.classList.add('front');
  back.classList.add('back');

  back.style.backgroundImage = `url(${src})`;

  card.setAttribute('data-card-id', id);
  card.setAttribute('data-card-tag', tag);

  // To read more about "pause" variable, please refer to game.ts file.
  card.onclick = () => !pause && selectCard(card);

  wrapper.appendChild(front);
  wrapper.appendChild(back);
  card.appendChild(wrapper);

  return card;
}