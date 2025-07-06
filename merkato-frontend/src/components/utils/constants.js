export const featuredProducts = [
  {
    id: 1,
    name: 'Ethiopian Coffee Beans',
    description: 'Premium Arabica coffee beans from Yirgacheffe',
    price: 15.99,
    image: 'https://via.placeholder.com/300x300',
    additionalImages: [
      'https://via.placeholder.com/300x300',
      'https://via.placeholder.com/300x300',
      'https://via.placeholder.com/300x300'
    ],
    category: 'Food & Beverage',
    rating: 4,
    reviews: 128,
    stock: 50,
    sku: 'ET001',
    discount: 10,
    createdAt: '2023-01-15'
  },
  {
    id: 2,
    name: 'Handwoven Scarf',
    description: 'Traditional Ethiopian cotton scarf with colorful patterns',
    price: 24.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Fashion',
    rating: 5,
    reviews: 86,
    stock: 25,
    sku: 'ET002',
    createdAt: '2023-02-20'
  },
  {
    id: 3,
    name: 'Ethiopian Honey',
    description: 'Pure natural honey from the highlands of Ethiopia',
    price: 12.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Food & Beverage',
    rating: 4,
    reviews: 42,
    stock: 30,
    sku: 'ET003',
    discount: 15,
    createdAt: '2023-03-10'
  },
  {
    id: 4,
    name: 'Traditional Coffee Pot',
    description: 'Authentic Ethiopian jebena for coffee ceremony',
    price: 29.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Home & Kitchen',
    rating: 5,
    reviews: 57,
    stock: 15,
    sku: 'ET004',
    createdAt: '2023-01-25'
  },
  {
    id: 5,
    name: 'Handmade Basket',
    description: 'Beautiful woven basket made from natural materials',
    price: 19.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Home Decor',
    rating: 4,
    reviews: 34,
    stock: 20,
    sku: 'ET005',
    discount: 20,
    createdAt: '2023-04-05'
  },
  {
    id: 6,
    name: 'Ethiopian Spice Set',
    description: 'Collection of traditional Ethiopian spices',
    price: 18.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Food & Beverage',
    rating: 4,
    reviews: 29,
    stock: 40,
    sku: 'ET006',
    createdAt: '2023-02-15'
  }
]

export const bestSellers = [
  {
    id: 7,
    name: 'Silver Cross Necklace',
    description: 'Handcrafted silver cross pendant with chain',
    price: 45.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Jewelry',
    rating: 5,
    reviews: 112,
    stock: 10,
    sku: 'ET007',
    discount: 10,
    createdAt: '2023-01-10'
  },
  {
    id: 8,
    name: 'Ethiopian Teff Flour',
    description: 'Organic teff flour for making injera',
    price: 14.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Food & Beverage',
    rating: 4,
    reviews: 98,
    stock: 60,
    sku: 'ET008',
    createdAt: '2023-03-01'
  },
  {
    id: 9,
    name: 'Leather Sandals',
    description: 'Handmade leather sandals in traditional style',
    price: 32.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Fashion',
    rating: 4,
    reviews: 76,
    stock: 18,
    sku: 'ET009',
    discount: 15,
    createdAt: '2023-02-05'
  },
  {
    id: 10,
    name: 'Ethiopian Art Painting',
    description: 'Colorful painting depicting Ethiopian culture',
    price: 89.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Art',
    rating: 5,
    reviews: 24,
    stock: 5,
    sku: 'ET010',
    createdAt: '2023-01-20'
  }
]

export const newArrivals = [
  {
    id: 11,
    name: 'Bamboo Coffee Cup',
    description: 'Eco-friendly bamboo cup for traditional coffee',
    price: 12.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Home & Kitchen',
    rating: 4,
    reviews: 15,
    stock: 30,
    sku: 'ET011',
    createdAt: '2023-05-01'
  },
  {
    id: 12,
    name: 'Cotton Kaftan',
    description: 'Lightweight cotton kaftan with Ethiopian design',
    price: 39.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Fashion',
    rating: 4,
    reviews: 8,
    stock: 12,
    sku: 'ET012',
    discount: 10,
    createdAt: '2023-04-20'
  },
  {
    id: 13,
    name: 'Spiced Tea Blend',
    description: 'Traditional Ethiopian spiced tea mixture',
    price: 9.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Food & Beverage',
    rating: 5,
    reviews: 21,
    stock: 45,
    sku: 'ET013',
    createdAt: '2023-04-15'
  },
  {
    id: 14,
    name: 'Ceramic Coffee Set',
    description: 'Beautiful ceramic set for coffee ceremony',
    price: 54.99,
    image: 'https://via.placeholder.com/300x300',
    category: 'Home & Kitchen',
    rating: 5,
    reviews: 6,
    stock: 8,
    sku: 'ET014',
    createdAt: '2023-05-10'
  }
]

export const allProducts = [...featuredProducts, ...bestSellers, ...newArrivals]