let words
let slider

function preload() {
	words = loadStrings('words.txt')
}

function setup() {
	noCanvas()

	slider = select('#slider')
	button_new_words = select('#button1')

	slider.input(() => {
		let n = slider.value()
		button_new_words.html(str(n) + ' neue Wörter')
	})

	button_new_words.mousePressed(() => {
		removeElements()
		let table = createElement('table')
		let counter = 0
		while (counter < slider.value()) {
			let word = words.splice(int(random(words.length)), 1)[0]
			if (word == '') {
				continue
			}
			counter++

			let tr = createElement('tr')
			tr.parent(table)

			let td1 = createElement('td')
			td1.html(str(counter) + '.')
			td1.style('text-align', 'right')
			td1.parent(tr)

			let td2 = createElement('td')
			td2.html(word)
			td2.parent(tr)
		}
	})
}
