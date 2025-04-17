import React from 'react'

const Card = () => {

    const [data, setData] = useState([]);
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wish')) || []
  );

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setData(res.data);
    });
  }, []);

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existing = cart.find(x => x.id === item.id);
    if (existing) {
      existing.count += 1;
    } else {
      cart.push({ ...item, count: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addToWish = (item) => {
    let wish = [...wishlist];
    const exists = wish.find(x => x.id === item.id);
    if (exists) {
      wish = wish.filter(x => x.id !== item.id);
    } else {
      wish.push(item);
    }
    setWishlist(wish);
    localStorage.setItem('wish', JSON.stringify(wish));
  };

  const isInWishList = (id) => {
    return wishlist.some(item => item.id === id);
  };
  return (
    <div>
       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {data.map(item => (
        <div key={item.id} style={{ width: '200px', border: '1px solid black', padding: '10px' }}>
          <img src={item.image} alt="" style={{ width: '100px', height: '100px' }} />
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
          <button onClick={() => addToWish(item)}>
            {isInWishList(item.id) ? '💖 Remove Favorite' : '🤍 Add to Favorite'}
          </button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Card
