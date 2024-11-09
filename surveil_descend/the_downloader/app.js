document.getElementById('startButton').addEventListener('click', startDownloading);



async function startDownloading() {
  // Start button becomes disabled
  document.getElementById('startButton').disabled = true;

  // Fetch the list of cards from Scryfall API
  let url = "https://api.scryfall.com/cards/search?q=cmc=12";
  let response = await fetch(url);
  let data = await response.json();

//   fetch('cards.json')
//   .then(response => response.json())
//   .then(data => {
//     //   displayCards(data);
//         let data = data
//   })
//   .catch(error => {
//       console.error('Error loading the JSON:', error);
//   });

//   let response = await fetch('cards.json');
//   let data = await response.json();

  // Array to hold the card image URLs (art_crop)
  const cardImages = data.data.map(card => card.image_uris ? card.image_uris.art_crop : null).filter(url => url !== null);

  // Start downloading cards one per second
  let index = 0;
  const interval = setInterval(() => {
    if (index < cardImages.length) {
      downloadImage(cardImages[index], index);
      index++;
    } else {
      clearInterval(interval); // Stop after all cards have been downloaded
      alert('Download Complete!');
    }
  }, 1000); // 1000 ms = 1 second
}

// Function to trigger the download of the image
function downloadImage(imageUrl, index) {
  const a = document.createElement('a');
  a.href = imageUrl;
  a.download = `card_${index + 1}.jpg`; // Naming the image
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a); // Clean up
}
