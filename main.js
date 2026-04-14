const CARDS = [
  {
    tag: "Consent",
    statement: "Consent can be given once at the start of a relationship and applies to all future sexual activity.",
    isTrue: false,
    explanation: "Consent must be given freely each time. A 'yes' given one time may never be used automatically to give consent in the future. Consent can also be withdrawn at any time, even during an activity. It should be ongoing, enthusiastic, and clearly communicated.",
    source: "Source: Government of Canada – A Definition of Consent to Sexual Activity / Understanding Consent"
  },
  {
    tag: "Consent",
    statement: "Someone who is asleep, unconscious, or heavily intoxicated cannot give consent.",
    isTrue: true,
    explanation: "Consent requires a person to be fully awake, aware, and capable of making a clear decision. If someone is asleep, unconscious, or severely impaired by alcohol or drugs, they cannot legally give consent",
    source: "Source: Government of Canada – Understanding Consent"
  },
  {
    tag: "Consent",
    statement: "If someone doesn't say 'no,' that means they've said 'yes.'",
    isTrue: false,
    explanation: "Consent should never be assumed, silence or a lack of resistance DOES NOT interpert consent, consent must be an active, affirmative agreement, a clear yes. Always look for a clear, freely given yes.",
    source: "Source: Government of Canada – Understanding Consent"
  },
  {
    tag: "Consent",
    statement: "A person can change their mind and withdraw consent at any point, even if they agreed earlier.",
    isTrue: true,
    explanation: "Anyone has the right to stop or change their mind at any point and withdraw consent, before or during any sexual activity. When someone withdraws consent, all activity must stop *immediately.*",
    source: "Source: Government of Canada – Understanding Consent"
  }, //
  {
    tag: "Healthy Relationships",
    statement: "Jealousy is a sign of love and shows how much your partner cares about you.",
    isTrue: false,
    explanation: "Jealousy is actually a sign of insecurity, not love. Jealousy can be a sign of a controlling relationship. Healthy relationships are built on trust, respect, and healthy communication.",
    source: "Source: loveisrespect.org – Healthy Relationships"
  },
  {
    tag: "Healthy Relationships",
    statement: "In a healthy relationship, both partners can still maintain their own friendships and interests.",
    isTrue: true,
    explanation: "Healthy relationships encourage independence and personal growth. It's important for each person to maintain their own identity, friendships, and hobbies. Isolation from friends and family can be a sign of an abusive relationship.",
    source: "Source: CDC – Violence Prevention"
  },
  {
    tag: "Healthy Relationships",
    statement: "It's normal to feel afraid of your partner's reaction when bringing up concerns.",
    isTrue: false,
    explanation: "Fear of your partner's reaction is a major red flag. Both people should feel safe to express their feelings openly without fear of their partners reaction with anger, or retaliation. Feeling afraid is a sign something is wrong.",
    source: "Source: loveisrespect.org – Warning Signs of Abuse"
  },
  {
    tag: "Healthy Relationships",
    statement: "Checking your partner's phone without permission is a form of controlling behavior.",
    isTrue: true,
    explanation: "Everyone has a right to privacy, even in relationships. Getting access to your partner's phone, messages, or social media without consent is a form of controlling behavior. Trust is important, healthy partners don't feel the need to monitor each other.",
    source: "Source: National Domestic Violence Hotline – Internet Safety"
  },
  {
    tag: "Sexual Health",
    statement: "You can only get an STI from penetrative sex.",
    isTrue: false,
    explanation: "STIs (Sexually Transmitted Infections) can be spread through oral sex, skin-to-skin contact, and sharing needles, in addition to penetrative sex. Some STIs like herpes and HPV can spread through touching and kissing infected areas.",
    source: "Source: CDC - About Sexually Transmitted Infections (STIs)"
  },
  {
    tag: "Sexual Health",
    statement: "Many STIs can have no symptoms at all, even while being transmissible.",
    isTrue: true,
    explanation: "Many STIs like chlamydia, gonorrhea, and HIV can be completely asymptomatic, meaning you may feel totally fine but still be able to pass an infection to others. That's why regular STI testing is an important part of sexual health, especially if you're sexually active.",
    source: "Source: CDC - About Sexually Transmitted Infections (STIs)"
  },
  {
    tag: "Sexual Health",
    statement: "Using two condoms at once provides double the protection.",
    isTrue: false,
    explanation: "Using two condoms at once actually creates more friction, making both condoms more likely to break. A single condom used correctly, the right size, no air at the tip, and used with lubrication, is the most effective physical barrier against STIs and pregnancy.",
    source: "Source: Teens Health - Can You Use Two Condoms for Extra Protection?"
  },
  {
    tag: "Sexual Health",
    statement: "Condoms are the only contraceptive method that also protect against most STIs.",
    isTrue: true,
    explanation: "While many contraceptives (pills, IUDs, implants) are highly effective at preventing pregnancy, external and internal condoms are the only contraceptive methods that also provide a barrier toward most sexually transmitted infections.",
    source: "Source: WHO – Global Sexually Transmitted Infections Programme"
  },
  {
    tag: "Communication",
    statement: "Talking about sexual limits and preferences with a partner is awkward and unnecessary.",
    isTrue: false,
    explanation: "Open communication about boundaries, preferences, and health is actually a key part of healthy relationships. While it might feel uncomfortable at first, these conversations help building trust, and helping to ensure both partners feel safe and respected.",
    source: "Source: Planned Parenthood – Talking with Your Partner"
  },
  {
    tag: "Communication",
    statement: "Setting clear personal boundaries is a sign of maturity and self-respect.",
    isTrue: true,
    explanation: "Boundaries help define what you are and aren't comfortable with emotionally, physically, and sexually. Communicating and maintaining your boundaries is healthy, normal, and shows strong self-awareness in a relationship. Partners who respect boundaries is a major green flag and it means that they care for you.",
    source: "Source: Psychology Today – Why Is It Important to Have Personal Boundaries?"
  },
  {
    tag: "Abuse Awareness",
    statement: "Emotional abuse is less serious than physical abuse because it doesn't leave physical marks.",
    isTrue: false,
    explanation: "Emotional abuse such as manipulation, humiliation, threats, and constant criticism, can be just as damaging as physical abuse, sometimes more so. The psychological effects can be severe and long-lasting. All forms of abuse are serious and deserve attention and support.",
    source: "Source: National Domestic Violence Hotline – What Is Emotional Abuse?"
  },
  {
    tag: "Abuse Awareness",
    statement: "Abuse can happen in any type of relationship regardless of age, gender, or sexual orientation.",
    isTrue: true,
    explanation: "Intimate partner violence and abuse affect people of all backgrounds, ages, genders, and sexual orientations. Abuse is never okay regardless of the context or the relationship circumstance. Anyone experiencing abuse deserves support and resources and help.",
    source: "Source: CDC – Preventing Intimate Partner Violence"
  },
  {
    tag: "Healthy Relationships",
    statement: "A relationship where one person makes all the decisions is perfectly healthy as long as the other person doesn't mind.",
    isTrue: false,
    explanation: "Healthy relationships involve mutual decision-making, compromise, and equal respect. When one person holds all the power and makes all choices, even if the other says they don't mind, this can lead to an unhealthy power imbalance that may escalate over time.",
    source: "Source: loveisrespect.org – Healthy Relationships"
  },
  {
    tag: "Sexual Health",
    statement: "Getting tested for STIs regularly is a responsible part of sexual health, not something to be ashamed of.",
    isTrue: true,
    explanation: "Regular STI testing is a completely normal, responsible health practice, similar to getting a physical or going to the dentist. There is no shame in being proactive about your health. Knowing your status allows you to make informed decisions and protect yourself and your partners.",
    source: "Source: Planned Parenthood – STD Testing"
  },
  {
    tag: "Consent",
    statement: "In a relationship, partners are always obligated to have sex when their partner wants to.",
    isTrue: false,
    explanation: "Absolutely no one regardless of relationship status, including marriage, is ever obligated to have sex. Every person has full autonomy over their own body at all times. Pressure, guilt-tripping, or forcing a partner to engage in sexual activity is never acceptable and does NOT count as consent",
    source: "Source: Government of Canada - A Definition of Consent to Sexual Activity"
  },
  {
    tag: "Healthy Relationships",
    statement: "Mutual respect means that both partners treat each other with dignity even when they disagree.",
    isTrue: true,
    explanation: "Respect is one of the most important foundations of a healthy relationship. This means listening to each other, valuing different opinions, and never resorting to insults or threats during arguments. Disagreements are normal, how you handle them defines the health of the relationship.",
    source: "Source: Love is Respect – Healthy Relationships"
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
