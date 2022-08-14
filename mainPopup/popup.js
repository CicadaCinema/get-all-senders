function setInfoText(text) {
	document.getElementById("popup-page").innerHTML = text;
}

async function load() {

	try {
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

	} catch (e) {
		let debugMessage = "Copy the error message log in <code>Thunderbird Menu > Tools > Developer Tools > Error Console</code>, redacting any personal information.";
		if (e) {
			debugMessage = `Copy this error message, redacting any personal information: <pre><code>${e.toString()}</code></pre>`;
		}

		let errorMessage = `The add-on encountered an unexpected error!<br>
		${debugMessage}<br>
		Please leave a review of this add-on or open a GitHub issue with the error message text to report this problem. 
		<a href = "https://github.com/CicadaCinema/get-all-senders/issues/new">Open GitHub Issue</a><br>`;

		setInfoText(errorMessage);
	}
}

document.addEventListener("DOMContentLoaded", load);