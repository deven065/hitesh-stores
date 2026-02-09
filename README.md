# Hitesh Stores - Modern E-Commerce Clothing Website

A professional, full-featured e-commerce website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## ✨ Features

### Core Functionality
- **🛍️ Product Catalog**: Browse products by category (Men, Women, Kids, Accessories)
- **🔍 Product Details**: Detailed product pages with image gallery, size/color selection
- **🛒 Shopping Cart**: Full cart functionality with local storage persistence
- **💳 Checkout Process**: Complete checkout flow with order summary
- **📱 Responsive Design**: Mobile-first design that works on all devices
- **⚡ Performance**: Optimized with Next.js 15 App Router and Server Components

### Product Features
- Featured products and new arrivals
- Product ratings and reviews
- Sale pricing with discount badges
- Size and color variations
- Stock status indicators
- Related product recommendations

### User Experience
- Sticky header with cart icon
- Category navigation
- Product filtering and sorting
- Image galleries with thumbnails
- Real-time cart updates
- Success notifications

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: React Context API
- **Image Optimization**: Next.js Image Component
- **Icons**: SVG inline icons

## 📁 Project Structure

```
hitesh-stores/
├── app/
│   ├── components/         # Reusable components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Footer with links
│   │   ├── Cart.tsx       # Shopping cart drawer
│   │   └── ProductCard.tsx # Product display card
│   ├── products/          # Product detail pages
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── shop/              # Category pages
│   │   ├── men/
│   │   ├── women/
│   │   ├── kids/
│   │   ├── accessories/
│   │   └── all/
│   ├── checkout/          # Checkout page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── context/
│   └── CartContext.tsx    # Shopping cart state
├── data/
│   └── products.ts        # Product data
├── types/
│   └── index.ts           # TypeScript types
└── public/                # Static assets
```

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design Features

### Industry Standards Implemented

1. **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
2. **Accessibility**: Semantic HTML, focus states, and ARIA labels where needed
3. **SEO Optimization**: Proper meta tags, image alt texts, and structured data
4. **Performance**: Image optimization, lazy loading, and code splitting
5. **User Experience**: 
   - Clear navigation with breadcrumbs
   - Visual feedback for user actions
   - Persistent cart using localStorage
   - Smooth transitions and animations

## 🛍️ Product Categories

1. **Men's Clothing** - T-Shirts, Jeans, Shirts, Activewear
2. **Women's Clothing** - Dresses, Activewear, Tops, Bottoms
3. **Kids' Clothing** - Hoodies, T-Shirts, Pants
4. **Accessories** - Bags, Shoes, Jewelry, Hats

## 📦 Key Pages

- **Homepage** (`/`) - Hero section, featured products, categories
- **Product Listing** (`/shop/[category]`) - Filtered product grids with sorting
- **Product Detail** (`/products/[slug]`) - Full product information with cart actions
- **Checkout** (`/checkout`) - Complete order and payment flow
- **Shopping Cart** - Slide-out drawer accessible from header

## 🔧 Customization

### Adding New Products

Edit `data/products.ts` to add new products following the Product type structure.

### Styling

Modify `app/globals.css` for global styles or use Tailwind classes directly in components.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
