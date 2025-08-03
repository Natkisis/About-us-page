window.addEventListener("load", function() {

	let timer = {
		interval: null, 
		time: 10,
		box: document.querySelector(".timer1"), 

		render() {
			timer.box.textContent = timer.time,
		},

		start() {
			timer.interval.setInterval(function{
				timer.time -=;
				render();

				if(timer.time < 1) {
					stop();
				}

			}, 1000),
		},

		stop() {
			timer.clearInterval(timer.interval);
		},

		adder() {
			timer.time +=;
		}
	};

	render();
	start();
});