import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (index, qty) => {
    const items = [...cartItems];
    items[index].quantity = qty;
    setCartItems(items);
  };

  const removeItem = index => {
    const items = [...cartItems];
    items.splice(index, 1);
    setCartItems(items);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section id="cart" className="py-5 bg-light">
      <div className="container">
        <h2 className="h3 text-center mb-4">Tu Carrito</h2>
        {cartItems.length === 0 ? (
          <p className="text-center">No hay productos en el carrito.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="table-primary">
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>$ {item.price.toFixed(2)}</td>
                    <td>
                      <input 
                        type="number" 
                        className="form-control form-control-sm" 
                        min="1" 
                        value={item.quantity} 
                        onChange={e => updateQuantity(index, parseInt(e.target.value))} 
                      />
                    </td>
                    <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => removeItem(index)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3" className="text-end"><strong>Total:</strong></td>
                  <td colSpan="2"><strong>$ {total.toFixed(2)}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
