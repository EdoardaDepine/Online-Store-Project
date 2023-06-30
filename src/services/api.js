export async function getCategories() {
  const getCategoriesAPI = await fetch(
    "https://api.mercadolibre.com/sites/MLB/categories"
  );
  const responseAPI = await getCategoriesAPI.json();
  return responseAPI;
}
