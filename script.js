// script.js
const confessionForm = document.getElementById('confession-form');
const confessionText = document.getElementById('confession-text');
const confessionList = document.getElementById('confession-list');

confessionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const confession = confessionText.value.trim();
    if (confession !== '') {
        displayConfession(confession);
        confessionText.value = '';
    }
});

function displayConfession(confession) {
    const confessionItem = document.createElement('div');
    confessionItem.classList.add('confession');
    confessionItem.textContent = confession;
    confessionList.prepend(confessionItem);
}
