function setInfoText(text) {
	document.getElementById("popup-page").innerHTML = text;
}

async function load() {
	const senders = new Set();

	let page = await messenger.messages.query({});
	let counter = 0;

	setInfoText(`Processing page ${counter++}...`);
	for (let message of page.messages) {
		senders.add(message.author)
	}

	while (page.id) {
		setInfoText(`Processing page ${counter++}...`);
		page = await messenger.messages.continueList(page.id);
		for (let message of page.messages) {
			senders.add(message.author)
		}
	}

	let text = "";
	senders.forEach(function (value) {
		text += value + "\n";
	})

	navigator.clipboard.writeText(text);
	setInfoText("Done! Check your clipboard.");
}

document.addEventListener("DOMContentLoaded", load);