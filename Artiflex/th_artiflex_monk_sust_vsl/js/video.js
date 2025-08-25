


let videoTime = 0;
let commentInterval;
let currentIndex = 1;

const video = document.getElementById('video');
const playOverlay = document.getElementById('play');
const progressBar = document.getElementById('progress-bar');
const orderElement = document.getElementById('order');
const spinnerContainer = document.querySelector('.spinner-container')

video.addEventListener('canplaythrough', () => {
	spinnerContainer.classList.add('d-none')
});
video.addEventListener('ended', () => {
	setTimeout(() => {
		spinnerContainer.classList.remove('d-none')
	}, 500);
})

function playVideo() {

	video.muted = false;
	video.currentTime = 0;
	playOverlay.style.display = 'none';
	video.play();

	// Змінна для зберігання ID таймера
	let timerId;

	// Відправляємо дані кожні 5 секунд після запуску відео
	timerId = setInterval(() => {
		const currentTime = video.currentTime;
		const duration = video.duration;
		sendVideoData(currentTime, duration); // Відправка даних
	}, 5000);

	// Зупинка інтервалу при паузі та завершенні відео
	video.addEventListener('pause', () => clearInterval(timerId));
	video.addEventListener('ended', () => clearInterval(timerId));

	video.addEventListener('timeupdate', function () {
		let videoTime = Math.trunc(video.currentTime);
		const duration = video.duration;
		const currentTime = video.currentTime;

		const firstPhaseDuration = 180;
		const secondPhaseDuration = duration - firstPhaseDuration;

		let progress = 0;

		if (currentTime <= firstPhaseDuration) {
			progress = (currentTime / firstPhaseDuration) * 50;
		} else {
			const secondPhaseTime = currentTime - firstPhaseDuration;
			progress = 50 + (secondPhaseTime / secondPhaseDuration) * 50;
		}

		progressBar.style.width = progress + '%';

		// Показуємо блок замовлення, коли залишається 420 секунд
		if (currentTime >= 420) {
			orderElement.style.display = 'block';
		}
	});

	// Функція для відправки даних на сервер
	function sendVideoData(currentTime, duration) {

		fetch('http', {
			method: 'POST',
			mode: 'no-cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				currentTime: currentTime,
				duration: duration,
			}),
		})
			.then(response => {

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}


				const contentType = response.headers.get('Content-Type');
				if (contentType && contentType.includes('application/json')) {
					return response.json();
				} else {
					return response.text();
				}
			})
			.then(data => {
				if (data) {
					console.log('Success:', data);
				} else {
					console.log('Empty response body');
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});

	}
}


const { mainBtn, form } = {
	mainBtn: document.querySelector('.main-btn'),
	form: document.querySelector('.clearfix'),
}

mainBtn.addEventListener('click', () => {
	form.classList.toggle('hide')
})


document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

document.addEventListener('keydown', function (event) {
	if (event.key === 'F12' ||
		(event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) ||
		(event.ctrlKey && event.key === 'U')) {
		event.preventDefault();
	}
});