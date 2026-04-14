# Rescue Store

Rescue Store is a modern e-commerce application built with **React** and **Firebase**, focused on delivering a complete shopping experience with dynamic products, user authentication, persistent cart functionality, protected checkout, and Firestore order management.

This project was created to strengthen practical frontend development skills by building a real-world application flow, including routing, global state management, authentication, database integration, and stock updates.

## Live Demo

- **Demo:** https://rescue-store.netlify.app/
- **Repository:** https://github.com/Lucas-Epherra/rescue-store

## Overview

The application allows users to browse a product catalog, filter products by category, view item details, add products to a shopping cart, and complete a purchase through a protected checkout flow.

Orders are stored in **Cloud Firestore**, and product stock is automatically updated after a successful purchase.

## Key Features

- Dynamic product catalog powered by **Firestore**
- Category-based product filtering
- Individual product detail view
- Quantity selector based on available stock
- Global cart state managed with **Context API**
- Cart persistence with **localStorage**
- User authentication with **Firebase Auth**
- Email/password registration and login
- **Google Sign-In**
- Protected checkout for authenticated users
- Redirect back to checkout after login
- Order creation in **Firestore**
- Automatic stock update after purchase
- Responsive user interface built with **React Bootstrap** and **Bootstrap**
- Visual feedback for purchase flow and validation states

## Tech Stack

- **React**
- **React Router DOM**
- **Firebase Authentication**
- **Cloud Firestore**
- **JavaScript**
- **Bootstrap**
- **React Bootstrap**
- **React Icons**
- **SweetAlert**
- **CSS**

## Concepts Applied

This project helped reinforce important frontend development concepts, including:

- Component-based architecture
- Routing and protected routes
- Global state management with Context API
- Local data persistence
- Authentication flows
- Firestore database integration
- Purchase logic and stock handling
- Responsive interface design
- User experience improvements across real application flows

## Main Routes

- `/` → Home
- `/productos` → Product catalog
- `/productos/:categoryId` → Products filtered by category
- `/detalle/:itemId` → Product detail view
- `/cart` → Shopping cart
- `/login` → Login page
- `/register` → Register page
- `/checkout` → Protected checkout

## Purchase Flow

1. The user browses the catalog and selects a product.
2. A quantity is chosen based on available stock.
3. The product is added to the cart.
4. The cart remains saved even after refreshing the page.
5. The user must be logged in to access checkout.
6. After authentication, the user is redirected back to the checkout flow.
7. The order is submitted and stored in Firestore.
8. Product stock is updated automatically.

## Project Structure

```bash
src/
├── assets/
├── componentes/
│   ├── Cart/
│   ├── CartWidget/
│   ├── Checkout/
│   ├── Inicio/
│   ├── Item/
│   ├── ItemCart/
│   ├── ItemCount/
│   ├── ItemDetail/
│   ├── ItemDetailContainer/
│   ├── ItemList/
│   ├── ItemListContainer/
│   ├── LoginScreen/
│   ├── RegisterScreen/
│   ├── footer/
│   └── navbar/
├── context/
│   ├── CartContext.js
│   └── LoginContext.js
├── firebase/
│   └── config.js
├── helpers/
├── router/
│   ├── AppRouter.js
│   └── ProtectedRoute.js
├── App.js
├── index.css
└── index.js
```

## Local Setup

```bash
# Clone the repository:

git clone https://github.com/Lucas-Epherra/rescue-store.git

# Go to the project folder:

cd rescue-store

# Install dependencies:

npm install

# Start the development server:

npm start
```

## Firebase Configuration

# To run this project correctly, you need a valid Firebase setup with:

- Firebase Authentication enabled
- Cloud Firestore configured
- A product collection loaded into the database
- Future Improvements
- User profile section
- Purchase history
- Better form validations
- Improved error handling
- Environment variables for Firebase configuration
- Testing for core components and flows

## Author

Lucas Epherra
Frontend Developer focused on building modern, responsive, and functional web interfaces.

GitHub: https://github.com/Lucas-Epherra
Portfolio: https://lucas-epherra.github.io/Portfolio/