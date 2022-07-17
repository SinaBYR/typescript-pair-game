import './gameCard.css';

type Props = {
  no: string;
  src: any;
}

export function gameCard({ no, src }: Props) {
  const card = document.createElement('div');
  const front = document.createElement('div');
  const back = document.createElement('div');

  card.classList.add('gameCard');
  card.setAttribute('data-card-number', no);

  front.classList.add('front');

  back.classList.add('back');
  back.style.backgroundImage = `url(${src})`;

  card.onclick = e => {
    card.classList.toggle('clicked');
  }

  card.appendChild(front);
  card.appendChild(back);

  return card;
}