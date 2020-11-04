const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("topicsList");

function renderList() {
	let fullList = JSON.parse(localStorage.getItem("topicsList")) || [];
	console.log(`retireved: ${fullList}`);

	fullList.forEach((item) => {
		let li = document.createElement("li");
		let nodeText = document.createTextNode(item);
		li.setAttribute("class", "list-item");

		li.appendChild(nodeText);
		list.appendChild(li);
	});
}

function addTopic() {
	let initialList = JSON.parse(localStorage.getItem("topicsList")) || [];
	console.log(initialList);
	let text = input.value;

	let finalList = initialList.push(text);
	console.log(finalList);

	localStorage.setItem("topicsList", JSON.stringify(finalList));
	renderList();
}
