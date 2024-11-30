document.getElementById('the_button').addEventListener('click', startFinding);
search = document.getElementById('search')

async function startFinding() {
	// Start button becomes disabled
	document.getElementById('the_button').disabled = true;

	text = search.value
    // data = "https://api.scryfall.com/cards/search?" + text
    url = "https://api.scryfall.com/cards/search?q=c%3Awhite+mv%3D1"
    const dataResponse = await fetch(url)
    const dataJson = await dataResponse.json();			
    // const data = URL.createObjectURL(dataBlob);

    console.log(dataJson)

    index = 0
    while (index < 10) {
        curCard = dataJson.data[index]
        orc_id = curCard.oracle_id
        console.log(orc_id)
        index++
    }
}