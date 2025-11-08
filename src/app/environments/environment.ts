export const environment = {
  production: false,
  apiUrl: 'https://local.api.example.com'


};

export const usermoduleEnvironment = {
  baseUrl:"https://local.api.example.com/user",
  login:"/auth/login",
  register:"/auth/register"
}

export const productmoduleEnvironment = {
  baseUrl:"https://local.api.example.com/product",
  getAllProducts:"/all-products",
  getProductById:"/get-by-id",
  showCartProducts:"/cart-products"
}

export const orderModuleEnvironment = {
  baseUrl:"https://local.api.example.com/order",
  getAllProducts:"/get-my-orders",
}

export const cartModuleEnvironment = {
  baseUrl:"https://local.api.example.com/cart",
  getAllProducts:"/cart-details",
} 