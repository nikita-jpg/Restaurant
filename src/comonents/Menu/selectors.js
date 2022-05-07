export const getTypedProducts = (type) => (state) => {
  const products = state.Products.Products;
  let neededProducts = [];

  products.map((product) => {
    if (product.type === type) {
      neededProducts.push(product);
    }
  });

  return neededProducts;
};
export const getProductById = (id) => (state) => {
  const products = state.Products.Products;
  let neededProduct = {};

  products.map((product) => {
    if (product.id === id) {
      neededProduct = product;
    }
  });

  return neededProduct;
};

export const getProducts = (state) => state.Products.Products;
