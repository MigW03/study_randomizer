const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("topicsList");
const resultDiv = document.getElementById("topic-result");
const resultText = document.getElementById("resultTopic");
const finishButton = document.getElementById("finishButton");

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
	if (!input.value) {
		return alert("Você precisa digitar algo para presseguir");
	}

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

function getTopic() {
	if (!fullList.length) {
		return alert("Sua lista está vazia, adicone algo primeiro");
	}

	// for (i = 0; i < fullList.length; i++) {
	let total = fullList.length;
	let randomNum = Number(Math.floor(Math.random() * total));
	resultText.innerHTML = fullList[randomNum];
	// }
	resultDiv.style.display = "flex";
}
