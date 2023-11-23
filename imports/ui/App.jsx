import React, { useState } from 'react'
import { FizzBuzzer } from './FizzBuzzer.jsx'

export const App = () => {
	const [min, setMin] = useState(1)
	const [max, setMax] = useState(100)

	return (
		<div>
			<p>Choose your range:</p>

			<div style={{ width: '16rem', display: 'flex', justifyContent: 'space-between' }}>
				<label for='min'>Minimum:</label>
				<input
					type='number'
					name='min'
					onInput={(e) => setMin(e.target.value)}
					value={min}
					max={max}
				></input>
			</div>
			<br></br>
			<div style={{ width: '16rem', display: 'flex', justifyContent: 'space-between' }}>
				<label for='max'>Maximum:</label>
				<input
					type='number'
					name='max'
					onInput={(e) => setMax(e.target.value)}
					min={min}
					value={max}
				></input>
			</div>

			<FizzBuzzer min={min} max={max} />
		</div>
	)
}
