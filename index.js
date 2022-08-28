let opacityPercentage = 225;

document.addEventListener('DOMContentLoaded', () => {
  const arrowElement = document.getElementById('arrow');

  window.onscroll = () => {
    opacityPercentage = Math.max(225 - window.pageYOffset, 0);
    arrowElement.style.opacity = opacityPercentage / 225;
  }
});