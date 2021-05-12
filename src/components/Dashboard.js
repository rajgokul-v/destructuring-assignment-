import React from 'react'

export const Dashboard = ({ number: numbers, ...props }) => {
	const [a, b, c] = numbers

	return (
		<div>
			name:{props.name}
			<br />
			age :{props.age}
			<br />
			Add : {a + b}
			<br />
			multiple:{b * c}
			<br />
			{props.age >= 18 ? 'true' : 'false'}
		</div>
	)
}
