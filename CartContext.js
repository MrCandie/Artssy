import { createContext, useState } from "react";
import {
  getProductData,
  postCart,
  updateCart,
  deleteCart,
  postFavorites,
  deleteFavorites,
} from "./Store";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  setCartItem: (item) => {},
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
  setFavorites: (fav) => {},
});

export function CartProvider({ children }) {
  const [cartProduct, setCartProduct] = useState([]);
  const [favoritesId, setFavoritesId] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProduct.find((product) => product.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }
  async function addFavorites(id) {
    const favId = await postFavorites({ id: id });
    setFavoritesId((curId) => [...curId, { id: id, favId: favId }]);
  }

  async function removeFavorites(id) {
    const favId = favoritesId.find((fav) => fav.id === id).favId;
    await deleteFavorites(favId);
    setFavoritesId((curId) => curId.filter((favId) => favId !== id));
  }

  function setFavorites(fav) {
    setFavoritesId(fav);
  }

  async function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      const cartId = await postCart({ id: id, quantity: quantity + 1 });
      setCartProduct((prev) => [
        ...prev,
        { id: id, quantity: 1, cartId: cartId },
      ]);
    } else {
      const cartId = cartProduct.find((item) => item.id === id).cartId;
      await updateCart(cartId, { id: id, quantity: quantity + 1 });
      setCartProduct(
        cartProduct.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  async function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      const cartId = cartProduct.find((item) => item.id === id).cartId;
      await updateCart(cartId, { id: id, quantity: quantity - 1 });
      setCartProduct(
        cartProduct.map((prod) =>
          prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
        )
      );
    }
  }

  async function deleteFromCart(id) {
    const cartId = cartProduct.find((item) => item.id === id).cartId;
    await deleteCart(cartId);
    setCartProduct((cartProduct) =>
      cartProduct.filter((curProd) => curProd.id !== id)
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProduct.map((cart) => {
      const productData = getProductData(cart.id);
      totalCost += productData.price * cart.quantity;
    });

    return totalCost;
  }

  function setCartItem(item) {
    setCartProduct(item);
  }

  const value = {
    items: cartProduct,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    setCartItem,
    setFavorites,
    getProductQuantity,
    addFavorites,
    removeFavorites,
    ids: favoritesId,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
