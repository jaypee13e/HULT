function toggleEnvelope(envelope) {
  envelope.classList.toggle('open');

  if (envelope.classList.contains('open')) {
    createConfetti();
  }
}

document.getElementById('nextBtn').addEventListener('click', function () {
  alert('This button will take you to the next message!');
  // Replace with your navigation logic
});

function createConfetti() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  const container = document.querySelector('.envelope-container');

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(confetti);

    setTimeout(() => {
      confetti.style.opacity = 1;
      confetti.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`;
      confetti.style.transition = `all ${Math.random() * 1 + 0.5}s ease`;

      setTimeout(() => {
        confetti.style.opacity = 0;
        setTimeout(() => {
          if (confetti.parentNode) {
            confetti.parentNode.removeChild(confetti);
          }
        }, 500);
      }, 1500);
    }, 50);
  }
}
