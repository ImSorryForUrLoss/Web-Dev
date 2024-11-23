document.getElementById('startButton').addEventListener('click', startDownloading);
const a = document.getElementById("downloader")

const downloadQueue = []

async function startDownloading() {
	// Start button becomes disabled
	document.getElementById('startButton').disabled = true;

	let url = "./cards.json";
	let response = await fetch(url);
	let data = await response.json();

	async function fetchCardImage(cardName, index) {
		try {
				const imageResponse = await fetch(data[index].image_uris.art_crop);
				const imageBlob = await imageResponse.blob();			
				const imageObjectURL = URL.createObjectURL(imageBlob);
				// console.log(data[index].oracle_id)
				// console.log("imageBlob " + imageBlob)
				// console.log("imageResponse " + imageResponse)
				// console.log("imageObjectURL " + imageObjectURL)

				a.href = imageObjectURL;
				a.download = data[index].oracle_id;
				a.click();
		} catch (error) {
		  console.log('Error:', error);
		  console.log(cardName + " " + index)
		} 
	}

	// const cardImages = data.map(card => card.image_uris ? card.image_uris.art_crop : null).filter(url => url !== null);
	// const cardId = data.map(card => card.oracle_id ? card.oracle_id : null);

	// Start downloading cards one per second

	let index1 = 0

	downloadCount = 33623

	while (index1 < downloadCount) {
		if (index1 % 100 === 0) {
			console.log(index1)
		}
		let type_line = data[index1].type_line
		if (type_line == "Card // Card") {console.log(type_line)} 
		else {
			try {
				const response = await fetch("./cimg/" + data[index1].oracle_id + ".jpg");
				if (response.ok) {} 
				else {
					downloadQueue.push(index1)
				}
			} catch (error){
				console.log(error)
			}
		} 
		index1++
	}

	// console.log(downloadQueue)

	let index = 0;
	const interval = setInterval(() => {
		// for (let index in downloadQueue) {
		// 	cardName = "./cimg/" + data[index].oracle_id + ".jpg"
		// 	fetchCardImage(cardName, index)
		// }

		if (index < downloadQueue.length) {

			cardName = "./cimg/" + data[downloadQueue[index]].oracle_id + ".jpg"
			fetchCardImage(cardName, downloadQueue[index])
			index++;
		} else {
			clearInterval(interval); // Stop after all cards have been downloaded
			alert('Download Complete!');
		}
	}, 1000); // 1000 ms = 1 second
}

// if (index =< downloadQueue.length) {
// 	cardName = "./cimg/" + data[index].oracle_id + ".jpg"
// 	fetchCardImage(cardName, index)
// 	index++;
// } else {
// 	clearInterval(interval); // Stop after all cards have been downloaded
// 	alert('Download Complete!');
// }











				// fetch(cardName)
				// 	.then(response => {
				// 		// Check if the file exists (200 status code) and is an image
				// 		if (response.ok) {
				// 			console.log("File \"" + cardName + "\" is present")
				// 		} 
						
				// 		else {
				// 			fetch(data[index].image_uris.art_crop)
				// 				.then(response => response.blob())
				// 				.then(imageBlob => {
				// 					const imageObjectURL = URL.createObjectURL(imageBlob);
				// 					// Create a temporary link to trigger download
				// 					const a = document.createElement('a');
				// 					a.href = imageObjectURL;
				// 					// a.download = data[index].oracle_id + ".jpg";
				// 					a.download = data[index].oracle_id
				// 					a.click(); // Simulate click to start download
				// 				})
				// 				.catch(error => console.log('Error fetching the image:', error));
				// 		}
				// 	})