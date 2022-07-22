import VictorySoundEffect from './assets/audio/victory-sound-effect.wav';
import ApplauseSoundEffect from './assets/audio/applause-sound-effect.wav';

// The selected card is stored in "element" variable.
let storedCard: HTMLDivElement|null = null;
let pairedCount: number = 0;

// The purpose of this variable is to block user from selecting card when they've already selected two cards.
// It's used in gameCard component to check if a card can be selected or not.
// When user has selected two cards, it means the selecting phase MUST be paused. Otherwise, they're allowed to play.
let pause = false;

// This function is called from component/gameCard.ts file when each card is selected by user.
function selectCard(card: HTMLDivElement) {
  // This block of code checks if current card is the one stored in storedCard variable.
  const storedCardId = storedCard?.getAttribute('data-card-id');
  const currentCardId = card.getAttribute('data-card-id');

  if(storedCardId === currentCardId) {
    return;
  }

  if(!storedCard) {
    card.classList.add('clicked');
    return storedCard = card;
  }

  // When upper if clause condition is not met, it means user has already picked a card before, and this selection is their second guess.
  // So, it means card selecting phase MUST be pause from now on.
  pause = true;

  const storedCardTag = storedCard.getAttribute('data-card-tag');
  const currentCardTag = card.getAttribute('data-card-tag');

  if(storedCardTag === currentCardTag) {
    pairedCount++;

    if(pairedCount === 5) {
      const endingDiv = document.querySelector('[data-ending]')!;
      endingDiv.classList.remove('hidden');
      setTimeout(() => {
        endingDiv.classList.remove('visuallyHidden');
      }, 1000)
    }
    
    card.classList.remove('fade-in');
    storedCard.classList.remove('fade-in');
    card.classList.add('paired');
    storedCard.classList.add('paired');
    card.classList.remove('clicked');
    storedCard.classList.remove('clicked');

    storedCard = null;
    // Second card guess was right, so the user is getting ready to start over.
    // Meaning, card selecting phase which was stopped earlier, is about to start.
    pause = false;

    if(pairedCount === 5) {
      const applauseAudio = new Audio(ApplauseSoundEffect);
      applauseAudio.play();
      return;
    }

    const victoryAudio = new Audio(VictorySoundEffect);
    victoryAudio.play();
    return;
  }

  card.classList.add('clicked');

  const timeout = setTimeout(() => {
    card.classList.remove('clicked');
    storedCard?.classList.remove('clicked');
    storedCard = null;
    // Second card guess was wrong, so the user is getting ready to start over.
    // Meaning, card selecting phase which was stopped earlier, is about to start.
    pause = false;
  }, 1000)
}

export { selectCard, pause }