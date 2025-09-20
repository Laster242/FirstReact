import { Route, Routes } from 'react-router'
import Appf from './App'
import CustomForm from './form'

export const Router = () => {
	return (
		<Routes>
			<Route index element={<Appf />} />
			<Route path='form' element={<CustomForm />} />
		</Routes>
	)
}
