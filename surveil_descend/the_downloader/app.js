document.getElementById('startButton').addEventListener('click', startDownloading);

// fetch('https://cards.scryfall.io/normal/front/8/6/86bf43b1-8d4e-4759-bb2d-0b2e03ba7012.jpg?1562242171/')
// 	 .then(response => response.blob())
// 	 .then(imageBlob => {
// 		 const imageObjectURL = URL.createObjectURL(imageBlob);

// 		 // Create a temporary link to trigger download
// 		 const a = document.createElement('a');
// 		 a.href = imageObjectURL;
// 		 a.download = 'image.jpg'; // You can specify the filename
// 		 a.click(); // Simulate click to start download
// 	 })
// 	 .catch(error => console.log('Error fetching the image:', error));

async function startDownloading() {
	// Start button becomes disabled
	document.getElementById('startButton').disabled = true;

	// Fetch the list of cards from Scryfall API
	// let url = "https://api.scryfall.com/cards/search?q=cmc=12";
	let url = "./cards.json";
	let response = await fetch(url);
	let data = await response.json();

	// Array to hold the card image URLs (art_crop)
	const cardImages = data.map(card => card.image_uris ? card.image_uris.art_crop : null).filter(url => url !== null);

	const cardId = data.map(card => card.oracle_id ? card.oracle_id : null);
	console.log(cardImages.length)

	// Start downloading cards one per second
	let index = 0;
	const interval = setInterval(() => {
		if (index < 105) {
			console.log(cardId[index])
			cardName = "./cimg/" + cardId[index] + ".jpg"

				fetch(cardName)
					.then(response => {
						// Check if the file exists (200 status code) and is an image
						if (response.ok) {
							console.log("File \"" + cardName + "\" is present")
						} 
						
						else {

							fetch(cardImages[index])
								.then(response => response.blob())
								.then(imageBlob => {
									const imageObjectURL = URL.createObjectURL(imageBlob);
                  console.log(cardImages[index])
									// Create a temporary link to trigger download
									const a = document.createElement('a');
									a.href = imageObjectURL;
									a.download = cardId[index] + ".jpg"; // You can specify the filename
									a.click(); // Simulate click to start download
								})
								.catch(error => console.log('Error fetching the image:', error));
						}
					})

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
