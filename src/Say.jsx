const names = [{ name: 'Valera' }, { name: 'Ignat' }, { name: 'Artem' }]

const Say = ({ children, a }) => {
	return (
		<div>
			{names.map((el, index) => (
				<div key={index}>
					{el.name} {children || a}
				</div>
			))}
		</div>
	)
}

export default Say
