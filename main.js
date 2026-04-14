const CARDS = [
  {
    tag: "Consent",
    statement: "Consent can be given once at the start of a relationship and applies to all future sexual activity.",
    isTrue: false,
    explanation: "Consent must be given freely each time. A 'yes' given one time may never be used automatically to give consent in the future. Consent can also be withdrawn at any time, even during an activity. It should be ongoing, enthusiastic, and clearly communicated.",
    source: "Source: Government of Canada – A Definition of Consent to Sexual Activity / Understanding Consent"
  }
];
let shuffledCards = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let results = [];

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = '';
  });
  const target = document.getElementById(id);
  target.style.display = 'flex';
  target.classList.add('active');
}

function startGame() {
  shuffledCards = shuffle([...CARDS]);
  currentIndex = 0;
  score = 0;
  answered = false;
  results = [];
  showScreen('screen-game');
  loadCard();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function loadCard() {
  answered = false;
  const card = shuffledCards[currentIndex];
  const total = shuffledCards.length;

  document.getElementById('card-counter').textContent = `Card ${currentIndex + 1} of ${total}`;
  document.getElementById('score-display').textContent = `Score: ${score}`;

  const pct = (currentIndex / total) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';

  document.getElementById('card-tag').textContent = card.tag;
  document.getElementById('card-number').textContent = String(currentIndex + 1).padStart(2, '0');
  document.getElementById('card-statement').textContent = card.statement;
  document.getElementById('card-source').textContent = card.source || '';

  const btnMyth = document.querySelector('.btn-myth');
  const btnFact = document.querySelector('.btn-fact');
  btnMyth.classList.remove('disabled', 'correct-choice', 'wrong-choice');
  btnFact.classList.remove('disabled', 'correct-choice', 'wrong-choice');

  const panel = document.getElementById('explanation-panel');
  panel.classList.remove('visible');

  const cardEl = document.getElementById('game-card');
  cardEl.classList.remove('flip-out');
  void cardEl.offsetWidth;
  cardEl.classList.add('flip-in');
  setTimeout(() => cardEl.classList.remove('flip-in'), 350);
}

function answer(userSaidTrue) {
  if (answered) return;
  answered = true;

  const card = shuffledCards[currentIndex];
  const isCorrect = (userSaidTrue === card.isTrue);

  if (isCorrect) score++;

  results.push({
    card,
    userAnswer: userSaidTrue,
    correct: isCorrect
  });

  document.getElementById('score-display').textContent = `Score: ${score}`;

  const btnMyth = document.querySelector('.btn-myth');
  const btnFact = document.querySelector('.btn-fact');

  btnMyth.classList.add('disabled');
  btnFact.classList.add('disabled');

  if (userSaidTrue === false) {
    if (card.isTrue === false) {
      btnMyth.classList.add('correct-choice');
    } else {
      btnMyth.classList.add('wrong-choice');
      btnFact.classList.add('correct-choice');
    }
  } else {
    if (card.isTrue === true) {
      btnFact.classList.add('correct-choice');
    } else {
      btnFact.classList.add('wrong-choice');
      btnMyth.classList.add('correct-choice');
    }
  }

  // Show explanation
  showExplanation(card, isCorrect);
}

function showExplanation(card, isCorrect) {
  const verdictEl = document.getElementById('explanation-verdict');
  const textEl = document.getElementById('explanation-text');
  const panel = document.getElementById('explanation-panel');

  if (isCorrect) {
    verdictEl.textContent = '✓ Correct!';
    verdictEl.className = 'explanation-verdict correct';
  } else {
    verdictEl.textContent = '✗ Incorrect — here\'s why:';
    verdictEl.className = 'explanation-verdict incorrect';
  }

  textEl.textContent = card.explanation;
//   document.getElementById('explanation-source').textContent = card.source || '';

  const btnNext = document.getElementById('btn-next');
  if (currentIndex === shuffledCards.length - 1) {
    btnNext.textContent = 'See Results →';
  } else {
    btnNext.textContent = 'Next Card →';
  }

  panel.classList.add('visible');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function nextCard() {
  currentIndex++;
  if (currentIndex >= shuffledCards.length) {
    showResults();
  } else {

    const cardEl = document.getElementById('game-card');
    cardEl.classList.add('flip-out');
    document.getElementById('explanation-panel').classList.remove('visible');
    setTimeout(() => {
      loadCard();
    }, 200);
  }
}

function showResults() {
  const total = shuffledCards.length;
  const pct = score / total;

  let emoji, heading, subtext;
  if (pct >= 0.9) {
    emoji = '🌟'; heading = 'Outstanding!'; subtext = 'You really know your stuff about healthy relationships.';
  } else if (pct >= 0.7) {
    emoji = '🎉'; heading = 'Great job!'; subtext = 'You have a solid understanding of these topics.';
  } else if (pct >= 0.5) {
    emoji = '👍'; heading = 'Good effort!'; subtext = 'You almost got it! Review the explanations and try again!';
  } else {
    emoji = '📚'; heading = 'Keep learning!'; subtext = 'You have a lot to learn! Review the explanations and try again!';
  }

  document.getElementById('results-emoji').textContent = emoji;
  document.getElementById('results-heading').textContent = heading;
  document.getElementById('results-subtext').textContent = subtext;
  document.getElementById('ring-number').textContent = score;
  document.getElementById('ring-total').textContent = `/ ${total}`;

  const circumference = 326.7;
  const offset = circumference - (pct * circumference);
  setTimeout(() => {
    document.getElementById('ring-fill').style.strokeDashoffset = offset;
  }, 200);

  const wrong = total - score;
  document.getElementById('results-breakdown').innerHTML = `
    <div class="breakdown-card">
      <div class="breakdown-label">Correct</div>
      <div class="breakdown-val green">${score}</div>
    </div>
    <div class="breakdown-card">
      <div class="breakdown-label">Incorrect</div>
      <div class="breakdown-val red">${wrong}</div>
    </div>
    <div class="breakdown-card">
      <div class="breakdown-label">Accuracy</div>
      <div class="breakdown-val">${Math.round(pct * 100)}%</div>
    </div>
    <div class="breakdown-card">
      <div class="breakdown-label">Cards played</div>
      <div class="breakdown-val">${total}</div>
    </div>
  `;

  // Progress bar to 100%
  document.getElementById('progress-bar').style.width = '100%';

  showScreen('screen-results');
}
function restartGame() {
  startGame();
}
function reviewCards() {
  const listEl = document.getElementById('review-list');
  listEl.innerHTML = '';

  results.forEach((r, i) => {
    const card = r.card;
    const answerLabel = r.userAnswer ? 'FACT' : 'MYTH';
    const correctLabel = card.isTrue ? 'FACT' : 'MYTH';

    const div = document.createElement('div');
    div.className = `review-card ${r.correct ? 'was-correct' : 'was-wrong'}`;
    div.innerHTML = `
      <div class="review-card-header">
        <span class="review-card-tag">${card.tag}</span>
        <span class="review-result-badge ${r.correct ? 'correct' : 'wrong'}">${r.correct ? '✓ Correct' : '✗ Wrong'}</span>
      </div>
      <p class="review-statement">${card.statement}</p>
      <p class="review-answer">
        This is a <span>${correctLabel}</span>.
        ${!r.correct ? `You answered <span>${answerLabel}</span>.` : ''}
      </p>
      <p class="review-explanation">${card.explanation}</p>
      ${card.source ? `<p class="card-source">${card.source}</p>` : ''}
    `;
    listEl.appendChild(div);
  });

  showScreen('screen-review');
}
document.addEventListener('DOMContentLoaded', () => {
  showScreen('screen-start');
});