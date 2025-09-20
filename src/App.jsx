import { useEffect } from 'react'
import { NavLink } from 'react-router'
import './App.css'
import st from './app.module.css'
import reactLogo from './assets/react.svg'
import CustomForm from './form'
import Say from './Say'
import { useCount } from './useCount'
import viteLogo from '/vite.svg'

function Appf() {
	const { count, increment, decrement, reset } = useCount()

	useEffect(() => {
		console.log('App render')
	}, [])

	useEffect(() => {
		console.log('Count change:', count)
	}, [count])

	return (
		<>
			<div>
				<NavLink to={'form'}>Go to form 2</NavLink>
				<Say>Lox</Say>
				<a href='https://vite.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<Say a='Pidar' />
			<h1>Vite + React</h1>
			<div className='card'>
				<h1>count is {count}</h1>
				<div className={st.buttons}>
					<button onClick={() => increment()}>+1</button>
					<button onClick={() => reset()}>reset</button>
					<button onClick={() => decrement()}>-1</button>
				</div>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
				<Say>Pitux</Say>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
			<CustomForm />
		</>
	)
}

export default Appf
