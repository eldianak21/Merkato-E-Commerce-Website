export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const calculateDiscountedPrice = (price, discount) => {
  return price * (1 - discount / 100)
}

export const getRandomProducts = (count) => {
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}