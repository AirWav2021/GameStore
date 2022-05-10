import React from 'react'
import { useDispatch } from 'react-redux'
import { GameCover } from '../game-cover'
import './order-item.scss'

export const OrderItem = ({ game }) => {
	const dispatch = useDispatch()

	const handleClick = () => {}

	return (
		<div className='order-item'>
			<div className='order-item__cover'>
				<GameCover image={game.image} />
				<div className='order-item__title'>
					<span>{game.title}</span>
				</div>
				<div className='order-item__price'>
					<span>{game.price} руб.</span>
				</div>
			</div>
		</div>
	)
}
