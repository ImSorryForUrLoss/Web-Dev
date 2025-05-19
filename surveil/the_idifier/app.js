document.getElementById('startButton').addEventListener('click', startDownloading);
const a = document.getElementById("downloader")

let downloadQueue = {}

async function startDownloading() {
	// Start button becomes disabled
	document.getElementById('startButton').disabled = true;

	let url = "./cards.json";
	let response = await fetch(url);
	let data = await response.json();

	let index1 = 0

	downloadCount = 33623

	async function processRequests() {
		let checkpointInterval = 250;
	  
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

				curCardId = data[index1].oracle_id
				downloadQueue[curCardId] = index1
				
				// this feels like to much error catching but ok thanks chatgpt
				} catch (error) {
					console.log(error);
				}
			}
		  
		  index1++;

		}

	  }
	  
	await processRequests();

	console.log("downloadqueue made")

	console.log("len: " + downloadQueue.length)
	console.log(downloadQueue)

	// return
}