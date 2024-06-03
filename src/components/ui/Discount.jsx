export const discountedPrice = (price, discount) => {
  return parseFloat(price - price * (discount / 100)).toFixed(2)
}
