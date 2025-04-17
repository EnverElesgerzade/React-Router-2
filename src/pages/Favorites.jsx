import { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);

  const removeFavorite = (id) => {
    const updated = favorites.filter(item => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Favorilər</h2>
      {favorites.length === 0 ? <p>Favori məhsul yoxdur.</p> :
        favorites.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => removeFavorite(item.id)}>Sil</button>
          </div>
        ))}
    </div>
  );
};

export default Favorites;
