const opts = {minimumIntegerDigits: 2};

function displayTime() {
	console.clear();

	const today = new Date();
	let hour = today.getHours().toLocaleString("en", opts);
	let minute = today.getMinutes().toLocaleString("en", opts);

	let year = today.getFullYear();
	let month = (today.getMonth() + 1).toLocaleString("en", opts);
	let day = today.getDate().toLocaleString("en", opts);


	console.log(month + "/" + day + "/" + year);
	console.log(hour + ":" + minute);
}

setInterval(displayTime, 1000);