document.addEventListener('DOMContentLoaded', function() {
    const previewButton = document.getElementById('preview-button');
    const saveButton = document.getElementById('save-button');
    
    function updatePreview() {
        document.querySelector('.title-text').textContent = document.getElementById('title').value;
        document.querySelector('.subtitle-text').textContent = document.getElementById('subtitle').value;
        document.querySelector('.to-text').textContent = document.getElementById('recipient').value;
        document.querySelector('.from-text').textContent = document.getElementById('sender').value;
        document.querySelector('.message-text').textContent = document.getElementById('message').value;
    }

    function saveCard() {
        let cards = JSON.parse(localStorage.getItem('cards')) || [];
        
        const newCard = {
            title: document.getElementById('title').value,
            subtitle: document.getElementById('subtitle').value,
            to: document.getElementById('recipient').value,
            from: document.getElementById('sender').value,
            message: document.getElementById('message').value,
        };

        cards.push(newCard);
        localStorage.setItem('cards', JSON.stringify(cards));
    }

    previewButton.addEventListener('click', updatePreview);
    saveButton.addEventListener('click', function(event) {
        event.preventDefault();
        saveCard();
    });
});
