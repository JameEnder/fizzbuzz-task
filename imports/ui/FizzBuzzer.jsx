import React from 'react'

export const FizzBuzzer = ({ min, max }) => {
	const wordMap = {
		3: 'Robot',
		5: 'ICT',
	}

	function convertNumber(number) {
		let result = ''

		for (const [divider, text] of Object.entries(wordMap)) {
			if (number % divider == 0) {
				result += text
			}
		}

		if (result == '') {
			result = String(number)
		}

		return result
	}

	const numbers = []

	for (let i = min; i <= max; i++) {
		numbers.push(i)
	}

	return (
		<div>
			<ul>
				{numbers.map(convertNumber).map((text) => (
					<li>{text}</li>
				))}
			</ul>
		</div>
	)
}
