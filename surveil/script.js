// Storing the list of GUIDs in an array
guids = [];

// Getting the container to display the GUIDs
const holder = document.getElementById('cardholder');
const list = document.getElementById('cardlist');
allToggle = document.getElementById('allToggle')
guidCheck = document.getElementById('guidCheck')

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
    // data = "https://api.scryfall.com/cards/search?" + text
    url = "https://api.scryfall.com/cards/search?q=c%3Awhite+mv%3D1"
    const dataResponse = await fetch(url)
    const dataJson = await dataResponse.json();			

    // console.log(dataJson)

    index = 0
    while (index < 10) {
        curCard = dataJson.data[index]
        orc_id = curCard.oracle_id
        guids.push(orc_id)
        index++
    }
}

startFinding()

// console.log(guids)

// Displaying each GUID in the container
function addCards() {
    guids.forEach(guid => {
        p = "./the_downloader/cimg/" + guid + ".jpg";
        const img = document.createElement('img')
        const div = document.createElement('div')
        img.src = p
        div.textContent = guid
        img.className = 'card'
        div.testFail = 0
        holder.appendChild(img);
        list.appendChild(div);
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