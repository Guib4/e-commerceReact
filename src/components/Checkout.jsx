import PropTypes from 'prop-types';

const Checkout = ({ cartItems, totalPrice }) => {
  const handleCheckout = () => {
    // Logic for handling checkout (e.g., API call, payment processing)
    console.log('Checkout initiated with items:', cartItems);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
      <button onClick={handleCheckout}>Complete Purchase</button>
    </div>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Checkout;
