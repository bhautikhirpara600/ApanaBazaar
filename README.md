## 💡 Project Philosophy

ApanaBazaar is a passion project crafted from scratch using my own imagination and self-devised logic. It reflects my unique approach to frontend development—modular, scalable, and user-first.

## 🏠 Homepage Structure

The homepage consists of three main sections:

- **Header**: Navigation and category dropdown
- **Product**: Dynamic product listing with hover animations, a search bar, and a sort dropdown
- **Footer**: Clean layout with responsive design

I’ve used **React Router** to place an `Outlet` between Header and Footer, enabling seamless navigation to pages like Cart, Wishlist, and Sign In.

## 🔃 Product Sorting

Users can sort products by:

- **Name (A-Z)**
- **Price (Low to High / High to Low)**

Sorting is handled via a custom `productListSelector` accessed through `useSelector`, ensuring precise data retrieval and avoiding unnecessary re-renders for a performant UI.

## 🔄 Data Fetching & State Management

- Products are fetched from [DummyJSON](https://dummyjson.com/) using `createAsyncThunk`.
- Minimal code handles loading/error states efficiently.
- `useSelector` is used strategically to prevent unnecessary re-renders.

## 🧩 Modular Components

Reusable components include:

- `Product`, `CartItem`, `WishlistItem`, `Input`
- Built with React’s reusability principle for performance and speed

## 🛍️ Cart & Wishlist UX

- Dynamic cart icon updates quantity in real-time
- Users can add/remove/increase/decrease items
- Empty states show thoughtful image + message
- `react-hot-toast` provides instant feedback

## 🔍 Search, Sort & Category Browsing

- Search bar with `react-simple-typewriter` animated placeholder
- Dropdown inside search bar with 12 product options
- Category dropdown with 24 distinct categories
- Sort dropdown (by name/price) using custom `productListSelector`
- All dropdowns styled with custom scrollbar

## 🖼️ Product Detail Page

- Dynamic routes for each product
- Multiple images with smooth transitions
- Hover animations for engaging UX

## ⬆️ Scroll to Top

- Appears after 1000px scroll
- Smooth scroll on click
- Arrow animated using Tailwind’s `@theme` and custom `--animate-up` utility

## 🎨 Design & Responsiveness

- Font: Nunito for clean, modern look
- Buttons with custom animations
- Tailwind custom breakpoints for mobile responsiveness

## 🔐 Authentication with Appwrite

- Email-password Sign Up / Sign In
- Optional email verification
