
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
		document.write("Цифра " + num + " в квадрате будет равна: " + num * num);
	}
	calcPow(45);
}

myFirstApp("Женя", 35);
