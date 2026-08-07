import "./Cart.css";

function Cart({ cart }) {

  const newCart = [];

  cart.forEach((item) => {
    const found = newCart.find((x) => x.id === item.id);

    if (found) {
      found.quantity += 1;
    } else {
      newCart.push({
        ...item,
        quantity: 1
      });
    }
  });

  const total = newCart.reduce((sum, item) => {
    return sum + Number(item.price.replace("₹", "")) * item.quantity;
  }, 0);

  return (
    <div className="cart-container">

      {newCart.map((item, index) => (
        <div className="cart-item" key={index}>

          <img
            src={item.image}
            width="100"
            alt={item.name}
          />

          <div className="cart-content">
            <h2>{item.name}</h2>

            <p>Price: {item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <p>
              Item Total: ₹
              {Number(item.price.replace("₹", "")) * item.quantity}
            </p>
          </div>

        </div>
      ))}

      <h2 className="total-price">
        Total Price: ₹{total}
      </h2>

    </div>
  );
}

export default Cart;