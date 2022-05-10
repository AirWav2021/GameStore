import React from 'react'
import { useSelector } from 'react-redux'
import { OrderItems } from '../../components/order-items/order-items'
import { calcTotalPrice } from '../../utils'
import './order-page.scss'

export const OrderPage = () => {
	const items = useSelector(state => state.cart.itemsInCart)

	if (items.length < 1) {
		return <h1>Ваша корзина пуста</h1>
	}

	return (
		<div className='order-page'>
			<div className='order-page__left'>
				{items.map(game => (
					<OrderItems game={game} />
				))}
			</div>
			<div className='order-item__right'>
				<div className='order-page__total-price'>
					<span>
						{items.length} товаров на сумму {calcTotalPrice(items)} руб.
					</span>
				</div>
			</div>
		</div>
	)
}
