import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Zinger Burger',
      price: 150,
      description: 'A deliciously crispy fried chicken fillet layered with fresh lettuce and creamy mayo, all wrapped in a soft sesame bun.',
      img: '/assets/images/zinger.jpeg'
    },
    {
      id: 2,
      name: 'Chicken Popcorn',
      price: 120,
      description: 'Bite-sized, crunchy chicken popcorn seasoned to perfection, bursting with flavor in every bite.',
      img: '/assets/images/kfc-popcorn.jpeg'
    },
    {
      id: 3,
      name: 'Chicken Bucket',
      price: 499,
      description: 'A bucket full of crispy, juicy fried chicken pieces perfect for sharing with family and friends.',
      img: '/assets/images/bucket.jpeg'
    },
    {
      id: 4,
      name: 'Rice Bowl',
      price: 120,
      description: 'Flavorful, spiced rice topped with crispy chicken strips and tangy sauces that delight your taste buds.',
      img: '/assets/images/kfc-rice-bowl.jpeg'
    },
    {
      id: 5,
      name: 'French Fries',
      price: 90,
      description: 'Golden, crispy fries served hot and lightly salted, a perfect companion for any meal.',
      img: '/assets/images/kfc-fries.jpeg'
    },
    {
      id: 6,
      name: 'Spicy Chicken Wings',
      price: 180,
      description: 'Spicy, juicy chicken wings glazed with tangy sauce for that extra kick of flavor.',
      img: '/assets/images/kfc-wings.jpeg'
    },
    {
      id: 7,
      name: 'Veg Strips',
      price: 110,
      description: 'Crispy, flavorful veggie strips coated with signature KFC herbs and spices.',
      img: '/assets/images/kfc-veg-strips.jpg'
    },
    {
      id: 8,
      name: 'Chocolate Brownie',
      price: 80,
      description: 'Rich, gooey chocolate brownie that melts in your mouth with every bite.',
      img: '/assets/images/kfc-brownie.jpeg'
    },
    {
      id: 9,
      name: 'Mojito',
      price: 60,
      description: 'A refreshing blend of lime, mint, and soda that cools you down instantly.',
      img: '/assets/images/kfc-mojito.jpeg'
    }
 
  ];

  const [cart, setCart] = useState({});
  const [showSummary, setShowSummary] = useState(false);

  // Add to Cart Function
  const addToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1
    }));
  };

  // Remove from Cart Function
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id] > 0) {
        updatedCart[id] -= 1;
      }
      if (updatedCart[id] === 0) {
        delete updatedCart[id];
      }
      return updatedCart;
    });
  };

  // Calculate Total Price
  const calculateTotal = () => {
    let total = 0;
    Object.keys(cart).forEach((id) => {
      const item = menuItems.find((item) => item.id === parseInt(id));
      total += cart[id] * item.price;
    });
    return total;
  };

  // Handle Checkout
  const handleCheckout = () => {
    setShowSummary(true);
  };

  return (
    <div className="menu">
      <h1>Our Menu</h1>

      {/* Menu Grid */}
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Price: ₹{item.price}</strong></p>
            <div className="add-to-cart">
              <button onClick={() => addToCart(item.id)}>Add</button>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
              <span> {cart[item.id] || 0} added</span>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Button */}
      {Object.keys(cart).length > 0 && (
        <div className="checkout">
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      )}

      {/* Order Summary */}
      {showSummary && (
        <div className="summary">
          <h2>Order Summary</h2>
          {Object.keys(cart).map((id) => {
            const item = menuItems.find((item) => item.id === parseInt(id));
            return (
              <p key={id}>
                {item.name} x {cart[id]} = ₹{cart[id] * item.price}
              </p>
            );
          })}
          <hr />
          <p><strong>Subtotal:</strong> ₹{calculateTotal()}</p>
          <p><strong>Service Charge (5%):</strong> ₹{(calculateTotal() * 0.05).toFixed(2)}</p>
          <p><strong>Tax (12%):</strong> ₹{(calculateTotal() * 0.12).toFixed(2)}</p>
          <h3><strong>Total Payable:</strong> ₹{(calculateTotal() * 1.17).toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Menu;
