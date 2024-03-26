document.addEventListener('DOMContentLoaded', function() {
    const previewButton = document.getElementById('preview-button');
    const saveButton = document.getElementById('save-button');
    
    // Function to update the preview area with form content
    function updatePreview() {
        document.querySelector('.title-text').textContent = document.getElementById('title').value;
        document.querySelector('.subtitle-text').textContent = document.getElementById('subtitle').value;
        document.querySelector('.to-text').textContent = document.getElementById('recipient').value;
        document.querySelector('.from-text').textContent = document.getElementById('sender').value;
        document.querySelector('.message-text').textContent = document.getElementById('message').value;
    }

    // Function to save the current card to localStorage
    function saveCard() {
        // Load existing cards from localStorage or create a new array if none exist
        let cards = JSON.parse(localStorage.getItem('cards')) || [];
        
        // Create a new card object from the form values
        const newCard = {
            title: document.getElementById('title').value,
            subtitle: document.getElementById('subtitle').value,
            to: document.getElementById('recipient').value,
            from: document.getElementById('sender').value,
            message: document.getElementById('message').value,
        };

        // Add the new card to the array and save it back to localStorage
        cards.push(newCard);
        localStorage.setItem('cards', JSON.stringify(cards));
    }

    // Attach event listeners to buttons
    previewButton.addEventListener('click', updatePreview);
    saveButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission which refreshes the page
        saveCard();
    });
});
