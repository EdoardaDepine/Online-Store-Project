const CART_ITEMS_KEY = "cart_product";

if (!JSON.parse(localStorage.getItem(CART_ITEMS_KEY))) {
  localStorage.setItem(CART_ITEMS_KEY, JSON.stringify([]));
}

export const readCartProducts = () =>
  JSON.parse(localStorage.getItem(CART_ITEMS_KEY));

export const saveProductInCart = (cartProducts) =>
  localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(cartProducts));
