// Fetching the data from the JSON file (local or from an API endpoint)
fetch('cards.json')
  .then(response => response.json()) // Parse the JSON data from the response
  .then(data => {
      displayCards(data);  // Call the function to display the data
  })
  .catch(error => {
      console.error('Error loading the JSON:', error);
  });

// Function to display cards on the page
function displayCards(cards) {
    const container = document.getElementById('card-container');  // Get the container div

    cards.forEach(card => {
        // Create a new div for each card
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');  // Add a class for styling if needed

        // Add card name
        const cardName = document.createElement('h2');
        cardName.textContent = card.name;
        cardDiv.appendChild(cardName);

        // Add card image
        const cardImage = document.createElement('img');
        cardImage.src = card.image_uris.small;  // Using normal size image
        cardImage.alt = card.name;
        cardDiv.appendChild(cardImage);

        // Add mana cost and type line
        const cardInfo = document.createElement('p');
        cardInfo.textContent = `Mana Cost: ${card.mana_cost} | Type: ${card.type_line}`;
        cardDiv.appendChild(cardInfo);

        // Append the card div to the container
        container.appendChild(cardDiv);
    });
}
