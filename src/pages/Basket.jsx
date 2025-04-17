import { useEffect, useState } from "react";

const Basket = () => {
  const [basket, setBasket] = useState(() => JSON.parse(localStorage.getItem("basket")) || []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const removeFromBasket = (id) => {
    setBasket(basket.filter(item => item.id !== id));
  };

  const increase = (id) => {
    setBasket(basket.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const decrease = (id) => {
    setBasket(basket.map(item =>
      item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
    ));
  };

  return (
    <div>
      <h2>Səbət</h2>
      {basket.length === 0 ? <p>Səbət boşdur.</p> :
        basket.map(item => (
          <div key={item.id}>
            <p>{item.name} - Say: {item.count}</p>
            <button onClick={() => increase(item.id)}>+</button>
            <button onClick={() => decrease(item.id)}>-</button>
            <button onClick={() => removeFromBasket(item.id)}>Sil</button>
          </div>
        ))}
    </div>
  );
};

export default Basket;
