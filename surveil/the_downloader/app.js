document.getElementById('startButton').addEventListener('click', startDownloading);
const a = document.getElementById("downloader")

const downloadQueue = []

async function startDownloading() {
	// Start button becomes disabled
	document.getElementById('startButton').disabled = true;

	let url = "./cards.json";
	let response = await fetch(url);
	let data = await response.json();

	console.log("data fetched")

	multiverse_ids = data[5].multiverse_ids.length

	// download the single sided card NO NOT CHANGE
	async function downloadOneSide(cardName, index) {
		try {
				const imageResponse = await fetch(data[index].image_uris.normal);
				const imageBlob = await imageResponse.blob();			
				const imageObjectURL = URL.createObjectURL(imageBlob);

				a.href = imageObjectURL;
				a.download = data[index].oracle_id;
				a.click();
		} catch (error) {
		  console.log('Error:', error);
		  console.log(cardName + " " + index)
		} 
	}

	async function downloadTwoSide(cardName, index) {
		try {
				const imageResponse = await fetch(data[index].card_faces[0].image_uris.normal);
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

	// Start downloading cards one per second

	let index1 = 1100

	downloadCount = 1120

	// while (index1 < downloadCount) {
	// 	if (index1 % 100 === 0) {
	// 		console.log("checkpoint reached after " + index1 + " checks")
	// 	}
	// 	let multiverse_ids = data[index1].multiverse_ids.length
	// 	if (multiverse_ids == 0) {console.log("TOKEN SPOTTED")} 
	// 	else {
	// 		try {
	// 			console.log("curr index val:" + index1)
	// 			const response = await fetch("./cimg/" + data[index1].oracle_id + ".jpg");
	// 			if (response.ok) {} 
	// 			else {
	// 				downloadQueue.push(index1)
	// 				console.log("FOUND YOU!")
	// 			}
	// 		} catch (error){
	// 			console.log(error)
	// 		}
	// 	}
	// 	index1++
	// }

	async function processRequests() {
		// let promises = [];
		let checkpointInterval = 100;
	  
		while (index1 < downloadCount) {

			if (index1 % checkpointInterval === 0) {
				console.log("checkpoint reached after " + index1 + " checks");
			}

			//   check for token
			let multiverse_ids = data[index1].multiverse_ids.length;
			if (multiverse_ids == 0) {
				console.log("TOKEN SPOTTED");
			} 
			
			else {
				try {

				console.log("curr index val:" + index1);
				console.log(data[index1].oracle_id)

				// check if card already downloaded
				const fetchPromise = await fetch("./cimg/" + data[index1].oracle_id + ".jpg")
					.then((response) => {
						if (response.ok) {} 
						else {
						downloadQueue.push(index1);
						console.log("FOUND YOU!");
						}
					})
					.catch((error) => {
						console.log(error);
					});
				
				// promises.push(fetchPromise);
				// this feels like to much error catching but ok thanks chatgpt
				} catch (error) {
					console.log(error);
				}
			}
		  
		  index1++;
	  
		// Process requests in batches for better control (optional)
		//   if (promises.length >= checkpointInterval) {
		// 	await Promise.all(promises);  // Wait for this batch to finish
		// 	promises = [];  // Reset the promise array
		//   }
		}
	  
		// Wait for any remaining promises after the loop
		// await Promise.all(promises);
	  }
	  
	await processRequests();

	console.log("downloadqueue made")

	console.log(downloadQueue.length)
	console.log(downloadQueue)

	// return


// TODO MAKE THE THINGY DOWNLOAD DOUBLESIDED CARDS LIKE 1106 CUZ THEY ARE FORMATTED DIFFERENTLY!!1!!!1!!1111!

	let index = 0;
	const interval = setInterval(() => {
		if (index < downloadQueue.length) {
			let multiverse_ids = data[index].multiverse_ids.length
			cardName = "./cimg/" + data[downloadQueue[index]].oracle_id + ".jpg"
			if (multiverse_ids == 1) {
				downloadOneSide(cardName, downloadQueue[index])
			} else if (multiverse_ids == 2) {
				downloadTwoSide(cardName, downloadQueue[index])
			} else {
				console.log("MORE THAN TWO SIDED CARD SPOTTED AT " + index + " WITH " + multiverse_ids.length +" MULTIVERSE IDS ")
			}
			index++;
			
		} else {
			clearInterval(interval); // Stop after all cards have been downloaded
			alert('Download Complete!');
		}
	}, 450); // 1000 ms = 1 second
}

// if (index =< downloadQueue.length) {
// 	cardName = "./cimg/" + data[index].oracle_id + ".jpg"
// 	downloadOneSide(cardName, index)
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