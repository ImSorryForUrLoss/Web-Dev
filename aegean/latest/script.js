const navButton = document.getElementById("navButton")

const box = document.getElementsByClassName("box")
const copy = document.getElementsByClassName("copy")
const oneClick = document.getElementsByClassName("oneClick")
const minecraft = document.getElementsByClassName("minecraft")
const crafttweaker = document.getElementsByClassName("crafttweaker")

const sidebarContent = document.getElementById("sidebarContent")
const sidebarBlur = document.getElementById("sidebarBlur")

// Make variables
let loops = 0;
let rootRef = document.querySelector(':root');
let clockTime = 50

let oneBlockSwapMode = `CoaS`

let buttonCopyElements = document.getElementsByClassName('buttonCopy')
let buttonLinkElements = document.getElementsByClassName('buttonLink')
let buttonFileElements = document.getElementsByClassName('buttonFile')

// let boxWidth = (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 30) / 5
// console.log(boxWidth)
//     for (var i = 0; i < box.length; i++) {
//       box[i].style.width = boxWidth;
//     }

// Convert input to sine wave
function s2 (x) {
	
	let s = Math.sin(x)
	return s*s

} //End s2

// Advance gradient  
function getStep () {
	let time = loops++/40;
	return s2(time)
} //End getStep

// Lerp inputs
const lerp = (a, b, amount) => (1 - amount) * a + amount * b;

// Set CSS var to input
function setCSSvar(cssvar, val) {

	rootRef.style.setProperty(cssvar, val);

} //End setCSSvar

// Gradient handler
function updateGradient () {

	let r1 = 99
	let g1 = 211
	let b1 = 255

	let r2 = 33
	let g2 = 111
	let b2 = 155

	let r3 = 0
	let g3 = 55
	let b3 = 199

	let r4 = 0
	let g4 = 11
	let b4 = 99

	let cStep = getStep()

	setCSSvar("--changing1", "rgb(" + lerp(r1, r2, cStep) + " " + lerp(g1, g2, cStep) + " " + lerp(b1, b2, cStep) + ")")
	setCSSvar("--changing2", "rgb(" + lerp(r3, r4, cStep) + " " + lerp(g3, g4, cStep) + " " + lerp(b3, b4, cStep) + ")")

	// let newColor = ""

	// Return out of void
	return

} // End updateGradient

					// HandleFilterOption

function removeAllResults() {
	for (let count = 0; count < box.length; count++) {
        box[count].style.display = 'none';
    }

	handleFilterUpdate(copy, varCopy)
	handleFilterUpdate(oneClick, varOneClick)
	handleFilterUpdate(minecraft, varMinecraft)
	handleFilterUpdate(crafttweaker, varCrafttweaker)
}

let varCopy = true
let varOneClick = true
let varMinecraft = true
let varCrafttweaker = true

function handleFilterToggle(varFilter) {

	varFilter = !varFilter
	// console.log(varFilter)
	return varFilter
}

function handleFilterUpdate(varFilterRaw, varFilter) {
	// console.log(varFilter)
	if (varFilter === true) {
		for (let count = 0; count < varFilterRaw.length; count++) {
			varFilterRaw[count].style.display = 'block';
		}
	}
}

// handle filter options event listener
document.getElementById("buttonCopy").addEventListener("click", function() {

	varCopy = handleFilterToggle(varCopy)
	removeAllResults()
});
document.getElementById("buttonOneClick").addEventListener("click", function() {

	varOneClick = handleFilterToggle(varOneClick)
	removeAllResults()
});
document.getElementById("buttonMinecraft").addEventListener("click", function() {

	varMinecraft = handleFilterToggle(varMinecraft)
	removeAllResults()
});
document.getElementById("buttonCrafttweaker").addEventListener("click", function() {

	varCrafttweaker = handleFilterToggle(varCrafttweaker)
	removeAllResults()
});

					// End HandleFilterOption

// handle crash fireball box
document.getElementById("crashFireball").addEventListener("click", function() {
  // Create a temporary textarea element
  var tempInput = document.createElement("textarea");
  tempInput.value = 'blaze_spawn_egg{EntityTag:{id:"minecraft:small_fireball",power:[9999999999999999.0,0.0,0.0]}}';
  
  // Append the textarea to the body
  document.body.appendChild(tempInput);
  
  // Select the text in the textarea
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices
  
  // Copy the selected text to the clipboard
  document.execCommand("copy");
  
  // Remove the temporary textarea from the body
  document.body.removeChild(tempInput);
  
});

// handle crafttweaker placeholder box
document.getElementById("ctPlaceholder").addEventListener("click", function() {
	// Create a temporary textarea element
	var tempInput = document.createElement("textarea");
	tempInput.value = `craftingTable.remove(<item:x);
	craftingTable.addShaped("x", <item:x>, [
		[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
		[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>],
		[<item:minecraft:air>, <item:minecraft:air>, <item:minecraft:air>]]);`;
	
	// Append the textarea to the body
	document.body.appendChild(tempInput);
	
	// Select the text in the textarea
	tempInput.select();
	tempInput.setSelectionRange(0, 99999); // For mobile devices
	
	// Copy the selected text to the clipboard
	document.execCommand("copy");
	
	// Remove the temporary textarea from the body
	document.body.removeChild(tempInput);
});

// handle 1block pos swapper box
document.getElementById("1blockPosSwapper").addEventListener("click", function() {
	// Create a temporary textarea element
	var tempInput = document.createElement("textarea");

	

	if (oneBlockSwapMode === `CoaS`) {
		tempInput.value = `Carrot on a Stick command goes here`;
	}

	if (oneBlockSwapMode === `WFoaS`) {
		tempInput.value = `Warped Fungus on a Stick command goes here`
	}

	if (oneBlockSwapMode === `customEntity`) {
		var textBoxContents = prepTextForinputting(document.getElementById('posSwapinput').value)
		tempInput.value = `Custom ` + textBoxContents + ` Entity ` + textBoxContents + ` Command Goes Here`
	}
	
	// Append the textarea to the body
	document.body.appendChild(tempInput);
	
	// Select the text in the textarea
	tempInput.select();
	tempInput.setSelectionRange(0, 99999); // For mobile devices
	
	// Copy the selected text to the clipboard
	document.execCommand("copy");
	
	// Remove the temporary textarea from the body
	document.body.removeChild(tempInput);
});

// handle quickInstantCommand
document.getElementById("quickInstantCommand").addEventListener("click", function() {
	// Create a temporary textarea element
	var tempInput = document.createElement("textarea");

	var textBoxContents = prepTextForinputting(document.getElementById('quickCommandinput').value)

	var commandName = textBoxContents.split(" ")[0]

	tempInput.value = `/give @p enderman_spawn_egg{display:{Name:'{"text":"Command: ` + commandName + `"}'},EntityTag:{id:"minecraft:falling_block",BlockState:{Name:"minecraft:command_block"},TileEntityData:{auto:1b,Command:"` + textBoxContents + `"},Time:1,DropItem:0b,Motion:[0.0,-10.0,0.0]}} 1`;
	
	// Append the textarea to the body
	document.body.appendChild(tempInput);
	
	// Select the text in the textarea
	tempInput.select();
	tempInput.setSelectionRange(0, 99999); // For mobile devices
	
	// Copy the selected text to the clipboard
	document.execCommand("copy");
	
	// Remove the temporary textarea from the body
	document.body.removeChild(tempInput);
});

// handle 1 block command swapper
document.getElementById("1blockCommandToggle").addEventListener("click", function() {
	// Create a temporary textarea element
	var tempInput = document.createElement("textarea");

	var textBoxContents1 = prepTextForinputting(document.getElementById('cmdToggleTextarea1').value)

	var textBoxContents2 = prepTextForinputting(document.getElementById('cmdToggleTextarea2').value)

	if (oneBlockToggleMode === `CoaS`) {
		tempInput.value = `Carrot on a Stick command goes here ` + textBoxContents1 + ` ` + textBoxContents2;
	}

	if (oneBlockToggleMode === `WFoaS`) {
		tempInput.value = `Warped Fungus on a Stick command goes here ` + textBoxContents1 + ` ` + textBoxContents2;
	}

	if (oneBlockToggleMode === `customEntity`) {
		var textBoxContents = prepTextForinputting(document.getElementById('commandToggleinput').value)
		tempInput.value = `Custom ` + textBoxContents + ` Entity ` + textBoxContents + ` Command Goes Here ` + textBoxContents1 + ` ` + textBoxContents2;
	}
	
	// Append the textarea to the body
	document.body.appendChild(tempInput);
	
	// Select the text in the textarea
	tempInput.select();
	tempInput.setSelectionRange(0, 99999); // For mobile devices
	
	// Copy the selected text to the clipboard
	document.execCommand("copy");
	
	// Remove the temporary textarea from the body
	document.body.removeChild(tempInput);
});

// handle useful 1block toggle box
document.getElementById("useful1BlockToggle").addEventListener("click", function() {
	// Create a temporary textarea element
	var tempInput = document.createElement("textarea");

	

	if (UsefulOneBlockMode === `CoaS`) {
		Activation = `Carrot on a stick`;
	}

	if (UsefulOneBlockMode === `WFoaS`) {
		Activation = `Warped Fungus on a Stick command goes here`
	}

	if (UsefulOneBlockMode === `customEntity`) {
		var textBoxContents = prepTextForinputting(document.getElementById('usefulToggleinput').value)
		Activation = `Custom: ` + textBoxContents
	}

	var OptionElement = document.getElementById("useful1BlockOptionDropdown")
	var Option = OptionElement.value

	// console.log(OptionElement)
	// console.log(Option)

	if (Option === `1`) {
		tempInput.value = Activation + ` One`
	}
	
	if (Option === `2`) {
		tempInput.value = Activation + ` Two`
	}

	if (Option === `3`) {
		tempInput.value = Activation + ` Three`
	}

	// Append the textarea to the body
	document.body.appendChild(tempInput);
	
	// Select the text in the textarea
	tempInput.select();
	tempInput.setSelectionRange(0, 99999); // For mobile devices
	
	// Copy the selected text to the clipboard
	document.execCommand("copy");
	
	// Remove the temporary textarea from the body
	document.body.removeChild(tempInput);
});

document.getElementById("techDCInvite").addEventListener("click", function() {

	var OptionElement = document.getElementById("MCInviteDropdown")
	var Option = OptionElement.value

	if (Option === `cartchives`) {
		window.open(`https://discord.gg/8nGNTewveC`);
	}
	
	if (Option === `storageTech`) {
		window.open(`https://discord.gg/JufJ6uf`);
	}

	if (Option === `tntArchive`) {
		window.open(`https://discord.gg/vPyUBcdmZV`);
	}

	
  
});

document.getElementById("exampleButton").addEventListener("click", function() {
	// Create a temporary textarea element
	var tempInput = document.createElement("textarea");

	var textBoxContents = document.getElementById('exampleTextarea').value

	var OptionElement = document.getElementById("exampleDropdown")
	var Option = OptionElement.value

	if (Option === `1`) {
		tempInput.value = `You chose option one and inputted ` + textBoxContents + ` into the text field.`
	}
	
	if (Option === `2`) {
		tempInput.value = `You chose option two and inputted ` + textBoxContents + ` into the text field.`
	}

	if (Option === `3`) {
		tempInput.value = `You chose option three and inputted ` + textBoxContents + ` into the text field.`
	}

	document.body.appendChild(tempInput);

	// Select the text in the textarea
	tempInput.select();
	tempInput.setSelectionRange(0, 99999); // For mobile devices
	
	// Copy the selected text to the clipboard
	document.execCommand("copy");
	
	// Remove the temporary textarea from the body
	document.body.removeChild(tempInput);
})

// toggle button styling on click

const toggleButtons = document.querySelectorAll('.navButton');

// Add click event listener to each button
toggleButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Toggle the class that controls the background color for this specific button
    this.classList.toggle('navButtonOff');
  });
});

// try (and fail) to center tooltips when they go offscreen
function moveTooltip(event) {
    const tooltip = event.currentTarget.querySelector('.tooltiptext');
    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    const tooltipLeft = tooltip.style.left;

    // If tooltip overflows to the left, move it to the right
    if (tooltipRect.left < 0) {
		// console.log((tooltipRect.width - tooltipLeft) + 'px')
		// console.log(tooltipRect.width)
		// console.log(tooltipLeft)
        tooltip.style.left = '145px';
		// console.log(viewportWidth)
    }
    // If tooltip overflows to the right, move it to the left
    else if (tooltipRect.right > viewportWidth) {
        tooltip.style.left = '-185px';
    }
};

// TODO: BUTTONS ARE AWFUL ITS A OR GATE NEEDS TO BE A AND GATE

// handle copied popup
for (var i = 0; i < buttonCopyElements.length; i++) {
	buttonCopyElements[i].addEventListener('click', function() {
		document.getElementById("popupCopy").classList.add("show");
		setTimeout(function() {
			document.getElementById("popupCopy").classList.remove("show");
		}, 2500);
	})
}

// handle link opened popup
for (var i = 0; i < buttonLinkElements.length; i++) {
	buttonLinkElements[i].addEventListener('click', function() {
		document.getElementById("popupLink").classList.add("show");
		setTimeout(function() {
			document.getElementById("popupLink").classList.remove("show");
		}, 2500);
	})
}

// handle file downloaded popup
for (var i = 0; i < buttonFileElements.length; i++) {
	buttonFileElements[i].addEventListener('click', function() {
		document.getElementById("popupFile").classList.add("show");
		setTimeout(function() {
			document.getElementById("popupFile").classList.remove("show");
		}, 2500);
	})
}


function prepTextForinputting(inputText) {
    let outputText = '';
    for (let i = 0; i < inputText.length; i++) {
        // if (inputText[i] === '/') {
        //     outputText += '\\';
        // }

		if (inputText[i] === '"') {
            outputText += '\\';
        }

		// if (inputText[i] === '\'') {
        //     outputText += '\\';
        // }

		if (inputText[i] === '\\') {

            outputText += '\\';
        }

		// if (inputText[i] === '`') {
        //     outputText += '\\';
        // }

		// if (inputText[i] === '|') {
        //     outputText += '\\';
        // }
        // Append the current character
        outputText += inputText[i];
    }
    return outputText;
}

function oneBlockSwapDropdownHandler() {
	oneBlockSwapMode = document.getElementById("oneBlockSwapDropdown").value;
	var oneBlockSwapTextarea = document.getElementById("posSwapinputVis")

	if (oneBlockSwapMode === `customEntity`) {
		oneBlockSwapTextarea.style.display = "block"
	}

	else {
		oneBlockSwapTextarea.style.display = "none"
	}
}

oneBlockSwapDropdownHandler()

function oneBlockToggleDropdownHandler() {
	oneBlockToggleMode = document.getElementById("oneBlockToggleDropdown").value;
	var oneBlockToggleTextarea = document.getElementById("commandToggleinputVis")

	if (oneBlockToggleMode === `customEntity`) {
		oneBlockToggleTextarea.style.display = "block"
	}

	else {
		oneBlockToggleTextarea.style.display = "none"
	}
}

oneBlockToggleDropdownHandler()

function usefulOneBlockDropdownHandler() {
	UsefulOneBlockMode = document.getElementById("useful1BlockActivationDropdown").value;
	var UsefulOneBlockTextarea = document.getElementById("useful1BlockinputVis")

	if (UsefulOneBlockMode === `customEntity`) {
		UsefulOneBlockTextarea.style.display = "block"
	}

	else {
		UsefulOneBlockTextarea.style.display = "none"
	}
}

usefulOneBlockDropdownHandler()

sidebarButton.addEventListener("click", function() {
	sidebarContent.classList.toggle("sidebarLeft");
	sidebarBlur.classList.toggle("sidebarNoBlur");
});

window.addEventListener("click", function(event) {
	if (event.target === sidebarBlur) {
		sidebarContent.classList.toggle("sidebarLeft");
		sidebarBlur.classList.toggle("sidebarNoBlur");
	}
});

setInterval(updateGradient,clockTime)



// Old JS Code


				// Old button system
// Button event listener
// button.addEventListener("click", async (event) => {

	// updateText()

// }) // End button listener


				// Old nav system
// const homeNav = document.getElementById("navHome")
// const QANav = document.getElementById("navQA")

// homeNav.addEventListener('click', function () {
//   // Hide the element by setting its display property to 'none'
//   homePage.style.display = 'block';
//   QAPage.style.display = 'none';
// }); //End homeNav click listener

// QANav.addEventListener('click', function () {
	// Hide the element by setting its display property to 'none'
	// homePage.style.display = 'none';
	// QAPage.style.display = 'block';
//   }); //End QANav click listener