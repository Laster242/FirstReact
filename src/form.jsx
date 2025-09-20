import { useState } from 'react'
import { useNavigate } from 'react-router'

const CustomForm = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const go = useNavigate()

	const onSubmit = e => {
		e.preventDefault()
		alert('submit ' + login + ' ' + password)
		setTimeout(() => {
			go('/')
		}, 1000)
	}

	const reset = () => {
		setLogin('')
		setPassword('')
	}

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='login'
				value={login}
				onChange={e => setLogin(e.target.value)}
			/>
			<input
				type='password'
				placeholder='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<div className='buttons'>
				<button type='submit'>Submit</button>
				<button type='reset' onClick={reset}>
					Reset
				</button>
			</div>
		</form>
	)
}

export default CustomForm
