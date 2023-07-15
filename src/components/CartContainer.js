import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
//import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";
function CartContainer() {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">Currently Empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bagg</h2>
      </header>
      <div>
        {cartItems.map((items) => {
          return <CartItem key={items.id} {...items} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span> ${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          Clear All
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
