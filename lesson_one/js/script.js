// let answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// document.write(answers);


// let answers = [],
// 	questions = [
// 		"Как ваше имя?",
// 		"Как ваша фамилия?",
// 		"Сколько вам лет?"
// 	];

// for (let i = 0; i < questions.length; i++) {
// 	answers[i] = prompt(questions[i])
// }

// document.write(answers);

// let age = prompt("Сколько вам лет?");

// if (age > 18) {
// 	alert("Вы можете пройти");
// } else {
// 	alert("Нельзя!");
// }

// function humanSayHello(obj) {
// 	document.write("Hello " + obj + "!")
// }

// humanSayHello("Женя");

// function calc(a,b) {
// 	console.log(a + b);
// };

// calc(4,1);


function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = ["html","css", "ГИТАРОЙ!!!РОК!!ХОЙ!!"];

		for (let i = 0; i < skills.length; i++) {
			document.write("Я хорошо владею " + skills[i] + "<br>"); 
		};

		
	}
	showSkills();

	function checkAge() {
		if (age > 18) {

			alert("Песок то ещё не сыпится?")
		} else {

			alert ("Тебе надо уроки делать. А ты тут трешься.")
		}
	}
	checkAge();

	function calcPow(num) {
		// Напиши функционал
		document.write(num * num);
	}
	calcPow(45);
}

myFirstApp("Женя", 35);
