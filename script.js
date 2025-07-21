    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
      if (index >= totalSlides) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = totalSlides - 1;
      } else {
        currentSlide = index;
      }
      document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    document.querySelector('.next').addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });

    document.querySelector('.prev').addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });

    let isPlaying = true;
    const playBtn = document.querySelector('.control-btn:nth-child(2)');
    if (playBtn) {
      playBtn.textContent = '⏸';
      playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playBtn.textContent = isPlaying ? '⏸' : '▶';
      });
    }

    setInterval(() => {
      if (isPlaying) {
        showSlide(currentSlide + 1);
      }
    }, 4000);

   window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundMusic');

    // Try to play after first interaction
    document.body.addEventListener('click', () => {
      audio.play().catch(e => {
        console.log("Autoplay blocked. Waiting for user interaction.");
      });
    }, { once: true });
  });

    showSlide(0);
