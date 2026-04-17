document.addEventListener('DOMContentLoaded', () => {
  const timeDisplay = document.querySelector('[data-testid="test-user-time"]');

  const updateTime = () => {
    if (timeDisplay) {
      timeDisplay.textContent = Date.now() + ' ms';
    }
  };

  updateTime();
  setInterval(updateTime, 500);
});
