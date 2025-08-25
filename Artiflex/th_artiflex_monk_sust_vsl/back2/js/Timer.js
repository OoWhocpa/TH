document.addEventListener("DOMContentLoaded", () => {
  const timerWrap = document.querySelector('.timer');
  const updateTimer = () => {
    const now = new Date().getTime();
    const endTime = now + 35 * 60 * 1000;
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = endTime - currentTime;

      if (distance <= 0) {
        clearInterval(interval);
        timerWrap.innerHTML = '<span>00:00:00</span>';
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Оновлення таймера
      document.querySelector('[data-adc-number="H2"]').textContent = Math.floor(hours / 10);
      document.querySelector('[data-adc-number="H1"]').textContent = hours % 10;
      document.querySelector('[data-adc-number="M2"]').textContent = Math.floor(minutes / 10);
      document.querySelector('[data-adc-number="M1"]').textContent = minutes % 10;
      document.querySelector('[data-adc-number="S2"]').textContent = Math.floor(seconds / 10);
      document.querySelector('[data-adc-number="S1"]').textContent = seconds % 10;
    }, 1000);
  };
  updateTimer();
});
