const request = require('request');

let counter = 1;
let hl;

let bridgeIp = '192.168.0.12';
let username = '';

function lights(light) {
	if (counter < 10) {
		console.log('going to switch the light');
		setTimeout(() => {
			request({
				url: `http://${bridgeIp}/api/${username}/lights/${light}/state`,
				method: 'PUT',
				json: {
					"on": true,
					"bri": (counter * 9) + 40
				}
			});

			lights();
		}, 500)

		counter++;
	}
}

lights(4);
