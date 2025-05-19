// Storing the list of GUIDs in an array
guids = [];

// Getting the container to display the GUIDs
const holder = document.getElementById('cardholder');
const list = document.getElementById('cardlist');
allToggle = document.getElementById('allToggle')
guidCheck = document.getElementById('guidCheck')
search_button = document.getElementById('the_button')

// document.getElementById('the_button').addEventListener('click', startFinding);
search = document.getElementById('search')

allToggleState = 0
guidCheckState = 0

// Force all checkboxes off
allToggle.checked = 0
guidCheck.checked = 0

async function startFinding() {
	// Start button becomes disabled
	document.getElementById('the_button').disabled = true;

	text = search.value
    console.log(text)
    // text = text.replace(/=/g, '%3D');
    text = text.replace(/ /g, '+');
    console.log(text)
    data = "https://api.scryfall.com/cards/search?q=" + text
    console.log(data)
    // url = "https://api.scryfall.com/cards/search?q=c%3Dwhite+mv%3D1"
    const dataResponse = await fetch(data)
    const dataJson = await dataResponse.json();
    totalCards = dataJson.total_cards

    console.log(totalCards)

    // console.log(dataJson)

    index = 0

    if (totalCards > 20) {
        totalCards = 20
    }

    while (index < totalCards) {
        curCard = dataJson.data[index]
        // console.log(curCard)
        orc_id = curCard.oracle_id
        guids.push(orc_id)
        index++
    }
}

// search_button.addEventListener('click', async function() {
//     await startFinding()

//     let url = "./the_downloader/cards.json";
// 	let response = await fetch(url);
//     // console.log(response)
// 	let cards = await response.json();

//     addCards(cards)
// })

// // console.log(guids)

// // Displaying each GUID in the container
// function addCards(cards) {
    
//     guids.forEach(guid => {
//         p = "./the_downloader/cimg/" + guid + ".jpg";
        
//         const card = document.createElement('div')
//         const cardName = document.createElement('div')
//         const img = document.createElement('img')

//         const div = document.createElement('div')

//         curCardData = cards.guid

//         console.log(curCardData)

//         curCardName = curCardData["name"]

//         // cardName.textContent = cards + "." + guid + ".name"
//         // console.log(cardName)

//         img.src = p
//         div.textContent = guid
//         img.className = 'card'
//         div.testFail = 0
//         holder.appendChild(card);
//         card.appendChild(cardName);
//         card.appendChild(img);
//         list.appendChild(div);
//     });

// }

search_button.addEventListener('click', async function() {
    await startFinding();

    let url = "./the_idifier/card_ids.json";
    let response = await fetch(url);
    let card_ids = await response.json();

    let url2 = "./the_downloader/cards.json";
    let response2 = await fetch(url2);
    let cards = await response2.json();

    addCards(cards, card_ids);
});

// Displaying each GUID in the container
function addCards(cards, card_ids) {
    guids.forEach(guid => {
        // Construct the image path for each GUID
        const p = "./the_downloader/cimg/" + guid + ".jpg";
        
        // Create the elements for the card
        const card = document.createElement('a');
        // const cardName = document.createElement('div');
        // const cardCost = document.createElement('div');
        // const cardType = document.createElement('div');
        const img = document.createElement('img');
        const div = document.createElement('div');

        console.log("guid: " + guid)
        l_id = card_ids[guid]

        // Get the current card data based on the GUID
        let curCardData = cards[l_id]; // Access the card data for the specific GUID
        console.log(curCardData)

        if (curCardData) {
            // get the data
            // const curCardName = curCardData["name"];
            // const curCardCost = curCardData["mana_cost"];
            // const curCardType = curCardData["type_line"];
            
            // set the vals
            // cardName.textContent = curCardName; // Set the card's name in the div
            // cardCost.textContent = curCardCost
            // cardType.textContent = curCardType
            
            // Set the image source and class
            img.src = p;
            img.className = 'card';

            card.href = "http://127.0.0.1:5500/card_details.html#" + guid
            
            // Set other content if needed
            div.textContent = guid;
            div.classList.add('card-container');

            // Append everything to the DOM
            holder.appendChild(card);
            // card.appendChild(cardName);
            // card.appendChild(cardCost);
            // card.appendChild(cardType);
            card.appendChild(img);
            list.appendChild(div);
        } else {
            console.error(`Card data for GUID ${guid} not found`);
        }
    });
}

setTimeout(() => {
addCards()
}, 1000);

function checkRemove(listLen) {

    for (let i = 0; i < listLen; i++) {

        // console.log(list.children[i])

        if (list.children[i].testFail < 1) {
            list.children[i].hidden = false
            holder.children[i].hidden = false
        } else {
            list.children[i].hidden = true
            holder.children[i].hidden = true
        }
    }
}

// remove invisible firstborn child
list.removeChild(list.firstChild)
holder.removeChild(holder.firstChild)

// Code for toggling all cards
allToggle.addEventListener('change', function() {
    const listLen = list.children.length

    if (allToggleState === 0) {
        for (let i = 0; i < listLen; i++) {
            list.children[i].testFail++
        }
        allToggleState = 1
    } else {
        for (let i = 0; i < listLen; i++) {
            list.children[i].testFail--
        }

        allToggleState = 0
    }

    checkRemove(listLen)

})

// Code for toggling all cards with last UUID char 9
guidCheck.addEventListener('change', function() {
    const listLen = list.children.length

    if (guidCheckState === 0) {
        
        for (let i = 0; i < listLen; i++) {
            thisBorn = list.children[i]
            thisBornText = thisBorn.textContent
            lastChar = thisBornText.charAt(thisBornText.length - 1)

            if (lastChar !== "a") {
                thisBorn.testFail++
            }

        }

        guidCheckState = 1
    } else {

        for (let i = 0; i < listLen; i++) {
            thisBorn = list.children[i]
            thisBornText = thisBorn.textContent
            lastChar = thisBornText.charAt(thisBornText.length - 1)

            if (lastChar !== "a") {
                thisBorn.testFail--
            }

        }

        guidCheckState = 0
    }

    checkRemove(listLen)

})