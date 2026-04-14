# Rescue Store

Rescue Store es una aplicación de e-commerce desarrollada con **React** y **Firebase**, enfocada en la gestión de catálogo, autenticación de usuarios y flujo de compra completo.

El proyecto fue creado para practicar y consolidar habilidades de frontend moderno, trabajando sobre una experiencia de compra real con catálogo dinámico, carrito persistente, rutas protegidas y generación de órdenes en Firestore.

## Live Demo

**Demo:** https://rescue-store.netlify.app/  
**Repository:** https://github.com/Lucas-Epherra/rescue-store

## Key Features

- Dynamic product catalog powered by **Firestore**
- Category-based product filtering
- Product detail view with stock-aware quantity selector
- Global cart state handled with **Context API**
- Cart persistence with **localStorage**
- User authentication with **Firebase Auth**
- Email/password login and **Google Sign-In**
- Protected checkout flow for authenticated users
- Redirect back to checkout after login
- Order creation in **Firestore**
- Automatic stock update after purchase
- Responsive UI built with **React Bootstrap** and **Bootstrap**

## Tech Stack

- React
- React Router DOM
- Firebase Authentication
- Cloud Firestore
- JavaScript
- Bootstrap
- React Bootstrap
- React Icons
- SweetAlert
- CSS

## Project Goals

This project was built to strengthen practical frontend development skills through a complete application flow, including:

- component-based architecture
- routing and protected routes
- global state management
- local persistence
- authentication flows
- database integration
- purchase logic and stock handling
- responsive interface design

## Main Routes

- `/` → Home
- `/productos` → Product catalog
- `/productos/:categoryId` → Products by category
- `/detalle/:itemId` → Product detail
- `/cart` → Shopping cart
- `/login` → Login
- `/register` → Register
- `/checkout` → Protected checkout

## Local Setup

Clone the repository:

```bash 
git clone https://github.com/Lucas-Epherra/rescue-store.git

Enter the project folder:

cd rescue-store

Install dependencies:

npm install

Run the development server:

npm start

```

### Future Improvements

- User profile section
- Purchase history
- Better form validations
- Improved error handling
- Environment variables for Firebase config
- Testing for core flows and components

### Author

Lucas Epherra
Frontend Developer focused on building modern, responsive and functional web interfaces.

GitHub: https://github.com/Lucas-Epherra
Portfolio: https://lucas-epherra.github.io/Portfolio/ 