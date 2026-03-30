# TravelTrucks

**TravelTrucks** is a single-page application for browsing and searching campers with filtering, detailed pages, and a favorites feature.

The project was created as a learning project and brought to a finished, production-like state with a focus on application logic, user experience, and a well-structured frontend.

🔗 **Live demo:** https://travel-trucks-eight-alpha.vercel.app

---

## 🚀 Features

- 📋 Campers catalog
- 🔍 Filtering by features and characteristics
- 📄 Camper details page
  - Image gallery
  - Features / Reviews (nested routes)
- ❤️ Add/remove campers to favorites
- 💾 Favorites persistence using `redux-persist`
- 📱 Responsive layout (mobile, tablet, desktop)
- ⚡ Optimized image loading (lazy loading, LCP handling)
- 🔗 Production deployment on Vercel

---

## 🛠 Tech Stack

- **React**
- **Vite**
- **Redux Toolkit**
- **React Router v6**
- **Redux Persist**
- **Ant Design**
- **CSS Modules**
- **Axios**

---

## 🧠 Architecture Notes

- Global state management is implemented with **Redux Toolkit**
- User-related state (favorites) is persisted in `localStorage` using **redux-persist**
- Server data (campers catalog) is fetched on application start
- The details page uses **nested routes** with `Outlet`
- UI components are adapted for different contexts (catalog, details, favorites)
- Layout and UI logic are clearly separated
- Mobile navigation is implemented using **Ant Design Drawer**

---

## 📦 Installation & Running Locally

Install dependencies:

```bash
npm install
```

Run the project in development mode:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## 📌 Notes
- The project uses a mock API
- The main focus of the project is frontend logic, state management, and UX

