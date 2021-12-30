async function load() {
	const senders = new Set();

	let page = await messenger.messages.query({});

	for (let message of page.messages) {
		senders.add(message.author)
	}

	while (page.id) {
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
	document.getElementsByClassName("popup-page")[0].innerHTML = "Done! Check your clipboard.";
}

document.addEventListener("DOMContentLoaded", load);