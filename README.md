# 🍗 Tajamal Fried Chicken (TFC) — Fast Food E-Commerce Website

> **"Taste Jo Deewana Karde"**  
> Complete, production-ready fast food web application built for **Tajamal Fried Chicken (Lahore)**.

---

## 🚀 Live Demo & Tech Stack
- **Framework:** React 19 + Vite 8
- **Routing:** React Router v7 (`react-router-dom`)
- **Styling & Design System:** Tailwind CSS v4 + Custom Brand Design System
- **Icons:** Lucide React
- **State Management:** Context API (`CartContext`, `ToastContext`) with automatic `localStorage` persistence
- **Ordering:** Instant WhatsApp Order Slip Generator + Online Checkout Flow

---

## 🍔 Features Overview

1. **Branded Fast Food Aesthetic:**
   - Custom palette extracted from Chef Tajamal's logo: Fiery Red (`#B91C1C`), Warm Crispy Orange (`#EA580C`), Golden Amber (`#F59E0B`).
   - Rich typography with Google Fonts (*Outfit* and *Plus Jakarta Sans*).
   - High-performance, GPU-accelerated micro-animations (`animate-fadeIn`, `animate-slide-up`, `animate-bounce-subtle`, `animate-pulse-glow`).

2. **Full Responsive & Mobile-First Experience:**
   - Sticky mobile bottom bar with live item count & subtotal.
   - Smooth slide-in Cart Drawer on all viewports.
   - Touch-friendly horizontal category tab bar with snap scrolling.

3. **Complete Menu with 73 Dishes & Deals:**
   - Deals & Combos with package inclusion tags (`✓ Zinger Burger`, `✓ Fries`, `✓ Regular Drink`).
   - S/M/L Pizza variants (7" Small, 10" Medium, 13" Large) with instant price calculation.
   - Gourmet Burgers, Stuffed Oven Bake Shawarmas, Paratha Rolls, Tortilla Wraps, Saucy Wings, Loaded Fries, and Dips.

4. **Interactive Customization Modal (Quick View):**
   - Size/Variant selector pills.
   - Optional Add-on extras (Garlic Mayo Dip, Extra Cheese Slice, Dynamite Sauce, Jalapeno Sauce).
   - Real-time subtotal counter.

5. **Cart & Free Delivery Tracker:**
   - Live progress bar towards Lahore Free Home Delivery threshold (Rs. 1,500).
   - Quantity stepper and item removal.

6. **Order Placement & Instant WhatsApp Integration:**
   - Checkout validation: Customer Name, Active Phone, Delivery Address, Special Cooking Notes.
   - Home Delivery vs. Self Pickup toggle.
   - Cash on Delivery (COD) and Online Transfer payment methods.
   - Automatic WhatsApp message generation with formatted itemized bill, order ID, delivery details, and customer name sent to shop number `0314-4308301`.

---

## 🛠️ Getting Started Locally

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## ⚙️ Configuration & Customization Guide

### 1. How to Update Shop Details (`src/config.js`)
All contact numbers, WhatsApp configuration, address, and timings are stored in [src/config.js](file:///c:/Users/Amir/OneDrive/Desktop/tajumalfood/tajumal-food/src/config.js):

```javascript
export const SHOP = {
  name: "Tajamal Fried Chicken",
  tagline: "Taste Jo Deewana Karde",
  address: "Ghoray Shah Road, Opposite PSO Petrol Pump, Lahore",
  phones: ["0314-4308301", "0322-4068031"],
  whatsappNumber: "923144308301", // International format without '+' or leading '0'
  currency: "Rs.",
  deliveryNote: "Free Home Delivery",
  social: "Tajammal Fried Chicken (Facebook / Instagram / TikTok)",
};
```

### 2. How to Edit Menu Items (`src/data/menu.js`)
The menu is organized by category in [src/data/menu.js](file:///c:/Users/Amir/OneDrive/Desktop/tajumalfood/tajumal-food/src/data/menu.js).

**Adding a Standard Item:**
```javascript
{
  id: "burger-new",
  category: "Burgers",
  name: "Smoky BBQ Burger",
  price: 380,
  variants: [],
  image: "https://your-image-url.com/burger.jpg",
  description: "Flame grilled patty with hickory bbq sauce.",
  featured: true,
  isSpicy: true,
  badge: "New"
}
```

**Adding an Item with Size Variants (e.g., Pizza):**
```javascript
{
  id: "pizza-new",
  category: "Pizzas",
  name: "Peri Peri Chicken Pizza",
  price: 500,
  variants: [
    { label: 'Small 7"', price: 500 },
    { label: 'Medium 10"', price: 850 },
    { label: 'Large 13"', price: 1250 }
  ],
  image: "https://your-image-url.com/pizza.jpg",
  description: "Spicy peri peri sauce with grilled chicken and onions."
}
```

**Adding a Combo / Deal:**
```javascript
{
  id: "deal-special",
  category: "Deals",
  name: "Midnight Cravings Deal",
  price: 650,
  includes: ["Zinger Burger", "2 Pcs Wings", "Fries", "Regular Drink"],
  variants: [],
  image: "https://your-image-url.com/deal.jpg",
  description: "Everything you need for late night cravings.",
  featured: true
}
```

### 3. How to Change Logo & Brand Colors
- **Logo:** Place your logo file at `/public/logo.png`.
- **Colors & Styles:** Brand variables and gradients can be tweaked in [src/index.css](file:///c:/Users/Amir/OneDrive/Desktop/tajumalfood/tajumal-food/src/index.css):
  ```css
  :root {
    --brand-red: #b91c1c;
    --brand-orange: #ea580c;
    --brand-amber: #f59e0b;
    --brand-dark: #1c1917;
  }
  ```

---

## 🌐 Deployment to Vercel & Netlify

### Deploy on Vercel
1. Push your project to GitHub / GitLab / Bitbucket.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Framework preset will automatically detect **Vite**.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**. *(The included `vercel.json` ensures all client-side routes like `/menu`, `/cart`, and `/checkout` reload flawlessly).*

### Deploy on Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy! *(The included `public/_redirects` file handles SPA routing automatically).*

---

## 📞 Support & Contacts
- **Brand:** Tajamal Fried Chicken (TFC)
- **Lahore Address:** Ghoray Shah Road, Opposite PSO Petrol Pump, Lahore
- **Phone:** 0314-4308301 / 0322-4068031
- **WhatsApp:** 0314-4308301
