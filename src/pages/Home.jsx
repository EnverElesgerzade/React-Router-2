import { useEffect, useState } from "react";
import { fetchProducts } from "../card/Card";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState(() => JSON.parse(localStorage.getItem("basket")) || []);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToBasket = (item) => {
    const exists = basket.find((i) => i.id === item.id);
    if (exists) {
      setBasket(basket.map((i) => i.id === item.id ? { ...i, count: i.count + 1 } : i));
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  };

  const addToFavorites = (item) => {
    if (!favorites.find((i) => i.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <div>
      <h2>Əsas səhifə</h2>
      {products.map((item) => (
        <div key={item.id}>
          <p>{item.name} - {item.price} AZN</p>
          <button onClick={() => addToBasket(item)}>Səbətə at</button>
          <button onClick={() => addToFavorites(item)}>Favori et</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
