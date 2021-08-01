import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../actions/';
import WithRestoService from '../hoc';

const CartTable = ({ items, deleteFromCart, RestoService }) => {
    if (items.length === 0) {
        return <div className="cart__title">Корзина пуста</div>;
    }

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {items.map(item => {
                    const { title, price, url, id, quantity } = item;
                    return (
                        <div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title} />
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">
                                {price}$ * {quantity}
                            </div>
                            <div
                                onClick={() => deleteFromCart(id)}
                                className="cart__close"
                            >
                                &times;
                            </div>
                        </div>
                    );
                })}
            </div>
            <button
                onClick={() => RestoService.setOrder(generateOrder(items))}
                className="order"
            >
                Оформить заказ
            </button>
        </>
    );
};

const generateOrder = items =>
    items.map(item => ({ id: item.id, quantity: item.quantity }));

const mapStateToProps = ({ items }) => ({ items });

const mapDispatchToProps = { deleteFromCart };

export default WithRestoService()(
    connect(mapStateToProps, mapDispatchToProps)(CartTable),
);
