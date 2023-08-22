import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { useDispatch } from 'react-redux';
import { cartActions } from '../features/cart/cartSlice';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(cartActions.removeItem(id));
  };

  const handleIncrement = () => {
    dispatch(cartActions.incrementItem(id));
  };

  const handleDecrement = () => {
    dispatch(cartActions.decrementItem(id));
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={handleRemove}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleIncrement}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={handleDecrement}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
