import { Provider } from 'react-redux'
import { store } from './redux'
import './App.css'

import { Router } from './Router'

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<Router />
			</Provider>
		</div>
	)
}

export default App
