import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../features/cart/cartSlice';
import { modalActions } from '../features/modal/modalSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.calculateTotals());
  }, [cartItems]);

  const handleClear = () => {
    dispatch(modalActions.changeState());
  };

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">Is Currently Empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={handleClear}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
