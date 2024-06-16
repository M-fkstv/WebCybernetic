const btn = document.getElementById('button');
const dialog = document.querySelector('dialog');
const closeButton = document.querySelector('dialog button');

btn.addEventListener('click', () => {
  dialog.showModal();
});

closeButton.addEventListener('click', () => {
  dialog.close();
});
