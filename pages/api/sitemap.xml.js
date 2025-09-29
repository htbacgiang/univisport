import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import db from "../../utils/db";
import Post from '../../models/Post';
import Product from '../../models/Product';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('🔄 Auto-generating sitemap on request...');
    
    // Kết nối database
    await db.connectDb();

    // Lấy tất cả posts và products từ database
    const [posts, products] = await Promise.all([
      Post.find({ isDraft: { $ne: true } }).select('slug updatedAt createdAt').lean(),
      Product.find({}).select('slug updatedAt createdAt').lean()
    ]);

    // Tạo sitemap content
    const baseUrl = 'https://dongphucunivi.com';
    const currentDate = new Date().toISOString();

    // Static routes
    const staticRoutes = [
      { url: '', priority: '1.0', changefreq: 'daily' },
      { url: '/gioi-thieu', priority: '0.8', changefreq: 'weekly' },
      { url: '/san-pham', priority: '0.9', changefreq: 'daily' },
      { url: '/bai-viet', priority: '0.8', changefreq: 'daily' },
      { url: '/lien-he', priority: '0.7', changefreq: 'monthly' },
      { url: '/dang-nhap', priority: '0.5', changefreq: 'monthly' },
      { url: '/dang-ky', priority: '0.5', changefreq: 'monthly' },
    ];

    // Product category routes
    const productCategoryRoutes = [
      { url: '/san-pham/dong-phuc-ao-polo', priority: '0.8', changefreq: 'weekly' },
      { url: '/san-pham/dong-phuc-ao-thun', priority: '0.8', changefreq: 'weekly' },
      { url: '/san-pham/dong-phuc-chay-bo', priority: '0.8', changefreq: 'weekly' },
      { url: '/san-pham/dong-phuc-cong-so', priority: '0.8', changefreq: 'weekly' },
      { url: '/san-pham/dong-phuc-golf-tennis', priority: '0.8', changefreq: 'weekly' },
      { url: '/san-pham/dong-phuc-gym', priority: '0.8', changefreq: 'weekly' },
      { url: '/san-pham/dong-phuc-le-tan', priority: '0.8', changefreq: 'weekly' },
      { url: '/san-pham/dong-phuc-mma', priority: '0.8', changefreq: 'weekly' },
      { url: '/san-pham/dong-phuc-pickleball', priority: '0.8', changefreq: 'weekly' },
      { url: '/san-pham/dong-phuc-su-kien', priority: '0.8', changefreq: 'weekly' },
      { url: '/san-pham/dong-phuc-team-building', priority: '0.8', changefreq: 'weekly' },
      { url: '/san-pham/dong-phuc-yoga-pilates', priority: '0.8', changefreq: 'weekly' },
    ];

    // Dynamic routes từ posts
    const postRoutes = posts.map(post => ({
      url: `/bai-viet/${post.slug}`,
      priority: '0.7',
      changefreq: 'weekly',
      lastmod: post.updatedAt || post.createdAt
    }));

    // Dynamic routes từ products
    const productRoutes = products.map(product => ({
      url: `/san-pham/${product.slug}`,
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: product.updatedAt || product.createdAt
    }));

    // Tạo XML sitemap
    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;

    // Thêm static routes
    staticRoutes.forEach(route => {
      const lastmod = currentDate;
      sitemapXml += `
<url><loc>${baseUrl}${route.url}</loc><lastmod>${lastmod}</lastmod><changefreq>${route.changefreq}</changefreq><priority>${route.priority}</priority></url>`;
    });

    // Thêm product category routes
    productCategoryRoutes.forEach(route => {
      const lastmod = currentDate;
      sitemapXml += `
<url><loc>${baseUrl}${route.url}</loc><lastmod>${lastmod}</lastmod><changefreq>${route.changefreq}</changefreq><priority>${route.priority}</priority></url>`;
    });

    // Thêm post routes
    postRoutes.forEach(route => {
      const lastmod = route.lastmod ? new Date(route.lastmod).toISOString() : currentDate;
      sitemapXml += `
<url><loc>${baseUrl}${route.url}</loc><lastmod>${lastmod}</lastmod><changefreq>${route.changefreq}</changefreq><priority>${route.priority}</priority></url>`;
    });

    // Thêm product routes
    productRoutes.forEach(route => {
      const lastmod = route.lastmod ? new Date(route.lastmod).toISOString() : currentDate;
      sitemapXml += `
<url><loc>${baseUrl}${route.url}</loc><lastmod>${lastmod}</lastmod><changefreq>${route.changefreq}</changefreq><priority>${route.priority}</priority></url>`;
    });

    sitemapXml += `
</urlset>`;

    // Ghi file sitemap vào public folder
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapXml);

    // Cập nhật robots.txt
    const robotsContent = `# *
User-agent: *
Allow: /

# Host
Host: ${baseUrl}/

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml`;

    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    fs.writeFileSync(robotsPath, robotsContent);

    // Set headers cho XML response
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache 1 hour
    
    console.log('✅ Sitemap auto-generated successfully!');
    console.log(`📊 Stats: ${staticRoutes.length} static + ${productCategoryRoutes.length} product categories + ${postRoutes.length} posts + ${productRoutes.length} products = ${staticRoutes.length + productCategoryRoutes.length + postRoutes.length + productRoutes.length} total routes`);

    // Trả về sitemap XML
    res.status(200).send(sitemapXml);

  } catch (error) {
    console.error('❌ Error auto-generating sitemap:', error);
    
    // Fallback: trả về sitemap hiện tại nếu có
    try {
      const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
      if (fs.existsSync(sitemapPath)) {
        const existingSitemap = fs.readFileSync(sitemapPath, 'utf8');
        res.setHeader('Content-Type', 'application/xml');
        res.status(200).send(existingSitemap);
        return;
      }
    } catch (fallbackError) {
      console.error('Fallback failed:', fallbackError);
    }
    
    res.status(500).json({
      success: false,
      message: 'Error generating sitemap',
      error: error.message
    });
  }
}
