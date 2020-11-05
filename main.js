const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("topicsList");

var fullList = JSON.parse(localStorage.getItem("topicsList")) || [];

input.addEventListener("keypress", (event) => {
	if (event.keyCode === 13) {
		addTopic();
	}
});

function renderList() {
	list.innerHTML = "";
	fullList.forEach((item) => {
		let li = document.createElement("li");
		li.addEventListener("contextmenu", (event) => {
			let rightClick = confirm(
				"Deseja deletar permanentemente esse tópico?"
			);
			if (rightClick == true) {
				deleteTopic(fullList.indexOf(item));
			}
			event.preventDefault();
		}),
			false;
		let nodeText = document.createTextNode(item);
		li.setAttribute("class", "list-item");

		li.appendChild(nodeText);
		list.appendChild(li);
	});
}

function addTopic() {
	let textArray = input.value.split(",");
	input.value = "";

	textArray.forEach((item) => {
		fullList.unshift(item);
	});
	renderList();
	saveToStorage();
}

function deleteTopic(pos) {
	fullList.splice(pos, 1);
	renderList();
	saveToStorage();
}

function saveToStorage() {
	localStorage.setItem("topicsList", JSON.stringify(fullList));
}
