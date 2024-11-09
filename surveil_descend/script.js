// Storing the list of GUIDs in an array
const guids = [
    '4b63bf36-cd0e-41d8-b0ca-aac459d91f3f',
    '7eff84f1-f772-497a-b350-bbc93d0230f7',
    '20e7a93f-77ce-466b-8586-35d390689d0c',
    '195bd8fe-581c-44ed-b7f8-e800df3502ff',
    '3425598f-d51c-4f92-8fda-42e96e4c537a',
    '84910453-e5dc-4bff-8554-86a5f4ab2746',
    'd71cd08e-3e84-41ff-b9db-9e343c0af6b4',
    'deeb7e22-b207-42de-b9d4-f790403d52a9',
    'e6ae536a-95c0-495d-98b8-200b3564dd79',
    'f8d7bcbd-9a1d-4fc6-abdd-88a7e01b9411',
];

// Getting the container to display the GUIDs
const holder = document.getElementById('cardholder');
const list = document.getElementById('cardlist');
allToggle = document.getElementById('allToggle')
guidCheck = document.getElementById('guidCheck')
cState = 0

// Force all checkboxes off
allToggle.checked = 0
guidCheck.checked = 0

// Displaying each GUID in the container
function addCards() {
    guids.forEach(guid => {
        p = "./cimg/" + guid + ".jpg";
        const img = document.createElement('img')
        const div = document.createElement('div')
        img.src = p
        div.textContent = guid
        img.className = 'card'
        holder.appendChild(img);
        list.appendChild(div);
    });
    
}

addCards()
const listLen = list.children.length

// remove invisible firstborn child
list.removeChild(list.firstChild)
holder.removeChild(holder.firstChild)

allToggle.addEventListener('change', function() {

    if (cState === 0) {
        while(holder.hasChildNodes()) {
            holder.removeChild(holder.firstChild)
            list.removeChild(list.lastChild)
        }
        cState = 1
    } else {
        addCards()

        cState = 0
    }

})

guidCheck.addEventListener('change', function() {

    if (cState === 0) {

        for (let i = 0; i < listLen; i++) {
            firstBorn = list.firstChild.textContent
            lastChar = firstBorn.charAt(firstBorn.length - 1)
            if (lastChar == 9) {
                const keep = document.createElement('div')
                const keepImg = document.createElement('img')

                keep.textContent = list.children[0].textContent
                keepImg.src = "./cimg/" + keep.textContent + ".jpg"
                keepImg.className = 'card'

                list.appendChild(keep)
                holder.appendChild(keepImg)

                list.removeChild(list.firstChild)
                holder.removeChild(holder.firstChild)
            } else {
                list.removeChild(list.firstChild)
                holder.removeChild(holder.firstChild)
            }

        }

        cState = 1
    } else {

        while(holder.hasChildNodes()) {
            holder.removeChild(holder.firstChild)
            list.removeChild(list.lastChild)
        }

        addCards()

        cState = 0
    }

})