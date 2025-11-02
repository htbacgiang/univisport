// Helper function to get products by category from API
import axios from 'axios';

// Keep image paths as-is, let components handle URL conversion
// (same logic as san-pham/[slug] page)
const toLocalImageUrl = (imagePath) => {
  // Return as-is, components will handle conversion
  return imagePath || '/images/placeholder.jpg';
};

// Fetch products data from API
async function getProductsData() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await axios.get(`${baseUrl}/api/products`);
    return response.data.products || [];
  } catch (error) {
    console.error('Error fetching products from API:', error);
    return [];
  }
}

export async function getProductsByCategory(categorySlug) {
  const productsData = await getProductsData();
  
  if (!categorySlug) {
    // Return all products if no category specified
    return productsData.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price,
      maxPrice: product.price, // Use price as maxPrice
      originalPrice: product.originalPrice,
      description: product.description,
      image: toLocalImageUrl(product.image),
      slug: product.slug,
      colors: Array.isArray(product.colors)
        ? product.colors.map(color => ({
            name: color.name,
            hex: color.hex,
            image: toLocalImageUrl(color.image)
          }))
        : [],
      isNew: product.isNew || false,
      isFeatured: product.isFeatured || false,
      discount: product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0,
      category: product.category,
      categoryNameVN: product.categoryNameVN,
      rating: product.rating || 0,
      reviewCount: product.reviewCount || 0,
      material: product.material || ''
    }));
  }

  // Filter products by category
  const filtered = productsData.filter(product => product.category === categorySlug);
  
  return filtered.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    maxPrice: product.price, // Use price as maxPrice
    originalPrice: product.originalPrice,
    description: product.description,
    image: toLocalImageUrl(product.image),
    slug: product.slug,
    colors: Array.isArray(product.colors)
      ? product.colors.map(color => ({
          name: color.name,
          hex: color.hex,
          image: toLocalImageUrl(color.image)
        }))
      : [],
    isNew: product.isNew || false,
    isFeatured: product.isFeatured || false,
    discount: product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0,
    category: product.category,
    categoryNameVN: product.categoryNameVN,
    rating: product.rating || 0,
    reviewCount: product.reviewCount || 0,
    material: product.material || ''
  }));
}

export async function getAllProducts() {
  return await getProductsByCategory(null);
}

