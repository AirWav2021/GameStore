import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { HomePage } from '../pages/home-page'
import { GamePage } from '../pages/game-page'
import { OrderPage } from '../pages/order-page'

const Home = () => <h2>Home</h2>

export const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			{/* <div>
				<NavLink
					to='/'
					style={({ isActive }) => ({ color: isActive ? 'green' : 'grey' })}
				>
					Home
				</NavLink>
			</div>
			<div>
				<NavLink
					to='/chats'
					style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
				>
					Chats
				</NavLink>
			</div>
			<div>
				<NavLink
					to='/profile'
					style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
				>
					Profile
				</NavLink>
			</div> */}
			<Routes>
				<Route path='/app/:title' element={<GamePage />} />
				<Route path='/order' element={<OrderPage />} />
				<Route path='/' element={<HomePage />} />
				<Route path='*' element={<h2>404</h2>} />
			</Routes>
		</BrowserRouter>
	)
}

const summ = (a, b) => a + b
const mult = (a, b) => a * b

const withLogger = fn => {
	return (...args) => {
		console.log(args)
		return fn(args)
	}
}

const summWithLogs = withLogger(summ)
const multWithLogs = withLogger(mult)

summWithLogs(1, 5)
multWithLogs(1, 5)
