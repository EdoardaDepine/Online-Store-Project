const CART_ITEMS_KEY = "cart_product";

if (!JSON.parse(localStorage.getItem(CART_ITEMS_KEY))) {
  localStorage.setItem(CART_ITEMS_KEY, JSON.stringify([]));
}

export const readCartProducts = () =>
  JSON.parse(localStorage.getItem(CART_ITEMS_KEY));

export const saveProductInCart = (cartProducts) =>
  localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(cartProducts));

export const addProductInCart = (cartProducts) => {
  const product = {
    title: cartProducts.title,
    price: cartProducts.price,
    thumbnail: cartProducts.thumbnail,
    id: cartProducts.id,
    quantity: 1,
  };

  const cartProductsLocalStorage = readCartProducts();
  cartProductsLocalStorage.length === 0
    ? saveProductInCart([product])
    : saveProductInCart([...cartProductsLocalStorage, product]);
};

export const getProductsCart = () => {
  const productsInCart = readCartProducts();
  return productsInCart;
};
