import productData from "./data.json";

export function getAllProducts() {
  return productData;
}

export function getProductById(id) {
  return productData.find((data) => data.id == id);
}

export function getProductsByCategory(category) {
  if (category === "all") {
    return getAllProducts();
  } else {
    return productData.filter((data) => data.category === category);
  }
}
