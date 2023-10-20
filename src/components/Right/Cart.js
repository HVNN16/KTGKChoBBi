import React from "react";
import './styleCart.css'

function Cart({ cartItems, onCloseCart, onRemoveItem }) {
  const removeDollarSignAndParseFloat = (price) => {
    return parseFloat(price.replace("$", ""));
  };

  const totalPrice = cartItems.reduce((total, item) => total + removeDollarSignAndParseFloat(item.price), 0);

  const handleCheckout = () => {
    window.alert(`Total amount to pay: $${totalPrice.toFixed(2)}`);
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <span>Shopping Cart</span>
        <button className="close-button" onClick={onCloseCart}>Close</button>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <button className="remove-item-button" onClick={() => onRemoveItem(item.id)}>X</button>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <p>{item.name}</p>
              <p>{item.price} | Size: {item.size}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <div className="total-price">
          Total: ${totalPrice.toFixed(2)}
        </div>
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;





