window.addEventListener('DOMContentLoaded', function(){
	//Получаем информацию для работы
	let products = document.querySelectorAll('.product');
	let buttons = document.getElementsByTagName("button"),
		open = document.getElementsByClassName("open")[0];
	//Функция для создания корзины
	function createCart() {
		//Создаем элементы для корзины
		let cart = document.createElement("div"),
			field = document.createElement('div'),
			heading = document.createElement('h2'),
			close = document.createElement("button");
		// Добавили классы элементам
		cart.classList.add("cart");
		field.classList.add("cart-field");
		close.classList.add("close");
		// Добавили текст элементам
		close.textContent = "Закрыть";
		heading.textContent = "В нашей корзине:";
		// Добавили элементы на страницу
		document.body.appendChild(cart);
		cart.appendChild(heading);
		cart.appendChild(field);
		cart.appendChild(close); 
	}

	createCart();

	let field = document.querySelector(".cart-field"),
		cart = document.querySelector(".cart"),
		close = document.querySelector(".close");

	for (let i = 0; i < buttons.length; i++) {
		//Вешаем обработчик события клика на каждую из кнопок
		buttons[i].addEventListener('click', function() {
			// Создали копию
			let item = products[i].cloneNode('true');
			let	btn = item.querySelector('button');

			item.classList.add("new_prod");
			btn.textContent = "Удалить";
			btn.classList.add("delete");
			field.appendChild(item);
			products[i].remove();
		})
	}

	
	

	function openCart() {
		cart.style.display = "block";

		let shop = document.querySelector(".shop"),
			btnDel = document.getElementsByClassName("delete"),
			newProd = document.querySelectorAll('.new_prod');

		for (let j = 0; j < btnDel.length; j++) {
			btnDel[j].addEventListener('click', function() {
				let itemTwo = newProd[j].cloneNode(true),
					btnTwo = itemTwo.querySelector('button');


				btnTwo.classList.remove("delete");
				itemTwo.classList.remove("new_prod");
				btnTwo.textContent = "Купить!";
				shop.appendChild(itemTwo);
				newProd[j].remove();
			})
		}
	}

	function closeCart() {
		cart.style.display = "none"
	}

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);

	


	

	
});