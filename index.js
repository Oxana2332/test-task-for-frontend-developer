'use strict';

//таймер
(function () {
	let limit = new Date(2023, 8, 24, 21, 24, 0, 0);
	let input = document.querySelector('.main_banner__timer');

	setInterval(() => {
		let now = new Date();
		let result = limit.getTime() - now.getTime();
		let resultDate = new Date(result);
		input.textContent = `${
			resultDate.getUTCHours() < 10
				? `0${resultDate.getUTCHours()}`
				: `${resultDate.getUTCHours()}`
		}:${
			resultDate.getUTCMinutes() < 10
				? `0${resultDate.getUTCMinutes()}`
				: `${resultDate.getUTCMinutes()}`
		}:${
			resultDate.getUTCSeconds() < 10
				? `0${resultDate.getUTCSeconds()}`
				: `${resultDate.getUTCSeconds()}`
		}`;
	}, 1000);
})();
