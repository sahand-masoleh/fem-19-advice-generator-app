const card = document.querySelector(".card");
const type = document.querySelector(".type");
const advice = document.querySelector(".advice");

const refresh = document.querySelector(".refresh");
refresh.addEventListener("click", fetchNewAdvice);

async function fetchNewAdvice() {
	try {
		let adviceObject = await fetch("https://api.adviceslip.com/advice");
		adviceObject = await adviceObject.json();
		const { advice: newAdvice, id } = adviceObject.slip;
		card.classList.add("fade");
		card.addEventListener("transitionend", () => {
			advice.innerText = `${newAdvice}`;
			type.innerText = `advice #${id}`;
			card.classList.remove("fade");
		});
	} catch (error) {
		console.log(error);
	}
}

fetchNewAdvice();
