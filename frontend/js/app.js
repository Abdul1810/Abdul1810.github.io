console.log(document.location);
document.querySelector("#name").innerText = localStorage.name;

let msg = document.createElement("div");

msg.innerHTML = `
<p class="botname">NATASA</p>
<p>Hello Sir</p>
`;
document.querySelector("#messages").prepend(msg);

document.querySelector("#change-name").addEventListener("click", () => {
	window.close();

	let location = String(document.location).split("/");
	location.pop();
	let newLocation = location.join("/");
	newLocation = newLocation + "/index.html";

	window.open(newLocation);
	return;
});

document.querySelector("#message-form").addEventListener("submit", (e) => {
	e.preventDefault();

	let message = document.querySelector("#message-input").value;

	var goodbyes = ["goodbye", "bye", "tata", "see you", "bye bye"];
	if (goodbyes.includes(message)) {
		window.close();

		let location = String(document.location).split("/");
		location.pop();
		let newLocation = location.join("/");
		newLocation = newLocation + "/bye.html";

		window.open(newLocation);
		return;
	}
	let msg = document.createElement("div");
	msg.innerHTML = `
	<p class="name">${localStorage.getItem("name")} (You)</p>
	<p>${message}</p>
	`;
	document.querySelector("#messages").prepend(msg);

	/* Bot Message*/
	async function getreply(imsg) {
		var res = await fetch(
			`https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=161128&key=OKNggsbkZ9W3FJk2&uid=${encodeURIComponent(
				localStorage.name
			)}&msg=${encodeURIComponent(imsg)}`,
			{
				method: "GET",
				headers: {
					"x-rapidapi-host": "acobot-brainshop-ai-v1.p.rapidapi.com",
					"x-rapidapi-key":
						"ed5ab3aef9msh7452d4214cbe424p1c8480jsn721fad49dfe0",
				},
			}
		).then((_e) => _e.json());
		let botmsg = document.createElement("div");
		botmsg.innerHTML = `
		<p class="botname">NATASA</p>
		<p>${res.cnt}</p>
		`;
		document.querySelector("#messages").prepend(botmsg);
	}
	getreply(message);
	document.querySelector("#message-form").reset();
});

document.querySelector("#clear").addEventListener("click", () => {
	document.querySelector("#messages").innerHTML = ``;
});
