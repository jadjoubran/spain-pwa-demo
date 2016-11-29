(function() {

	function boot() {

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then((data) => {
			data.forEach(function(user){
				let name = user.name + "sauros";
				let card = `<div class="card">Name: ${name}</div>`;
				document.querySelector('#users-list').innerHTML += card;
			});
		});
	}

	boot();
})();