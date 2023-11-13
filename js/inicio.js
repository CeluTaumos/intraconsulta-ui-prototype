const sunIcon = document.querySelector('.sun');
const body = document.body;

sunIcon.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
  } else {
    body.classList.add('dark-mode');
  }
});
