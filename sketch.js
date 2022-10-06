let words

function preload() {
	words = loadStrings('words.txt')

	for (let i = words.length-1; 0; i--) {
		let word = words[i]
		if (word.lenght == 0 || word == '') {
			console.log(i, word)
			words.splice(i, 1)
		}
	}

}

function setup() {
	noCanvas()

	button_new_words = select('#button1')
	button_new_words.mousePressed(() => {
		removeElements()
		let table = createElement('table')
		let counter = 0
		while (counter < 20) {
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
