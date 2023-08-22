import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../features/cart/cartSlice';
import { modalActions } from '../features/modal/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(cartActions.clearCart());
    dispatch(modalActions.changeState());
  };

  const handleCancel = () => {
    dispatch(modalActions.changeState());
  };

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn" onClick={handleClear}>
            confirm
          </button>
          <button type="button" className="btn clear-btn" onClick={handleCancel}>
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
