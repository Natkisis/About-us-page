window.addEventListener("load", function() {

	let timer = {
		interval: null, 
		time: 100,
		box: document.querySelector(".timer1"), 

		render(){
			timer.box.textContent = timer.time;
		},

		start() {
			timer.interval = setInterval(function(){
				timer.time--;
				timer.render();

				if(timer.time < 1) {
					timer.stop();
				}
			}, 1000);
		},

		stop() {
			clearInterval(timer.interval);
		},

		addendTime(t) {
			timer.time += t;
		}
	};

	timer.render();
	timer.start();
});