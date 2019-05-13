let slider
let label
let btnRoll
let resultDices
let resultSummary

window.onload = () => {
	slider = document.getElementById('nbDiceSlider')
	label = document.getElementById('nbDiceInput')
	btnRoll = document.getElementById('btnRoll')
	resultDices = document.getElementById('resultDices')
	resultSummary = document.getElementById('resultSummary')

	slider.value = 10
	label.value = 10

	slider.addEventListener('input', (e) => {
		label.value = slider.value
	})

	btnRoll.addEventListener('click', roll)
}

function roll() {
	let nbDice = parseInt(slider.value)
	let nbFail = 0
	let nbSuccess = 0
	let resultDicesHtml = ''


	for (let i = 0; i < nbDice; i++) {
		let diceVal = Math.floor(Math.random() * 6) + 1
		resultDicesHtml += getDivDice(diceVal)
		diceVal == 1 ? nbFail++
			: [5, 6].includes(diceVal) ? nbSuccess++ : null
	}
	console.log(nbFail, nbSuccess, nbDice)

	resultDices.innerHTML = resultDicesHtml
	resultSummary.innerHTML = getDivSummary(nbFail, nbSuccess, nbDice)
}

function getDivDice(nb) {
	let type = ''
	let dice = ''

	switch (nb) {
		case 1:
			dice = '⚀'
			type = 'fail'
			break
		case 2:
			dice = '⚁'
			break
		case 3:
			dice = '⚂'
			break
		case 4:
			dice = '⚃'
			break
		case 5:
			dice = '⚄'
			type = 'success'
			break
		case 6:
			dice = '⚅'
			type = 'success'
			break
		default:
			console.error("dive value must be between 1 and 6")
			return
	}

	return `<div class="${type} dice">${dice}</div>`
}

function getDivSummary(fail, success, total) {
	return `
		<div>
			<span class="fail">${fail}</span>
			<span class="total">/${total}</span>
		</div>
		<div>
			<span class="success">${success}</span>
			<span class="total">/${total}</span>
		</div>
	`
}