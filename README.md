# ShopNext - Premium E-commerce Frontend

A modern, responsive e-commerce frontend application built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. This project demonstrates a clean architecture for building online stores, integrating with the public FakeStoreAPI for data.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with a focus on user experience.
- **Client-Side Data Fetching**: Utilizes `useEffect` and `useState` for dynamic data updates on the client side.
- **Product Filtering & Sorting**: Real-time search by title/category and sorting by price or rating.
- **Dynamic Routing**: Individual product details pages using Next.js App Router dynamic segments.
- **Responsive Layout**: Mobile-first design that adapts gracefully to all screen sizes.
- **Loading & Error States**: Robust handling of asynchronous states for a smooth user journey.

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Data Source**: [FakeStoreAPI](https://fakestoreapi.com/)
- **Font**: Geist Sans & Mono

## 📂 Project Structure

```
ecommerce/
├── app/
│   ├── layout.js          # Root layout (Navbar, Footer, Fonts)
│   ├── page.js            # Landing Page (Client Component)
│   ├── loading.js         # Global Loading UI
│   ├── error.js           # Global Error UI
│   └── products/
│       ├── page.js        # Product Listing Page (Client Component)
│       └── [id]/
│           └── page.js    # Product Details Page (Client Component)
├── components/
│   ├── Navbar.jsx         # Main Navigation
│   ├── Footer.jsx         # Site Footer
│   ├── ProductCard.jsx    # Individual Product UI
│   ├── ProductList.jsx    # Filter/Sort Logic Wrapper
│   └── SearchBar.jsx      # Search & Sort Inputs
└── public/                # Static assets
```

## ⚡ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/vipul156/ShopNext.git
    cd ShopNext
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Navigate to [http://localhost:3000](http://localhost:3000)

## 🔄 Data Fetching Strategy

This project primarily uses **Client-Side Rendering (CSR)** for data fetching.
- **`useEffect` Hook**: Used in `page.js`, `products/page.js`, and `products/[id]/page.js` to fetch data from the API after the component mounts.
- **Loading States**: Skeletons and spinners are displayed while data is being retrieved.
- **Rationale**: Provides immediate interactivity and simplifies the transition for developers familiar with standard React patterns, while acting as a foundation for future server-side optimization if needed.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
