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
			message.ccList.forEach(ccString => senders.add(ccString))
		}

		while (page.id) {
			setInfoText(`Processing page ${counter++}...`);
			page = await messenger.messages.continueList(page.id);
			for (let message of page.messages) {
				message.ccList.forEach(ccString => senders.add(ccString))
			}
		}

		let text = "";
		senders.forEach(function (value) {
			text += value + "\n";
		})

		navigator.clipboard.writeText(text);
		setInfoText("Done! Check your clipboard.");

	} catch (e) {
		if (e) {
			setInfoText(`The add-on encountered an unexpected error!<br>
			Copy the error message below, redacting any personal information.<br>
			Please leave a review of this add-on or open a GitHub issue with the error message text to report this problem. 
			<a href = "https://github.com/CicadaCinema/get-all-senders/issues/new">Open GitHub Issue</a><br>`);

			const preElement = document.createElement("pre");
			const codeElement = document.createElement("code");

			codeElement.textContent = e.toString();

			preElement.appendChild(codeElement);
			document.getElementById("popup-page").appendChild(preElement);
		} else {
			setInfoText(`The add-on encountered an unexpected error!<br>
			Copy the error message log in <code>Thunderbird Menu > Tools > Developer Tools > Error Console</code>, redacting any personal information.<br>
			Please leave a review of this add-on or open a GitHub issue with the error message text to report this problem. 
			<a href = "https://github.com/CicadaCinema/get-all-senders/issues/new">Open GitHub Issue</a><br>`);
		}
	}
}

document.addEventListener("DOMContentLoaded", load);