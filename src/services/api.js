export async function getCategories() {
  const getCategoriesAPI = await fetch(
    "https://api.mercadolibre.com/sites/MLB/categories"
  );
  const responseAPI = await getCategoriesAPI.json();
  return responseAPI;
}

export async function getCategorieId(id) {
  const getCategorieId = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${id}`
  );
  const responseAPI = await getCategorieId.json();
  return responseAPI;
}

export async function getProductsFromQuery(query) {
  const getProducts = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
  );
  const responseAPI = await getProducts.json();
  return responseAPI;
}
