import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./app.scss"
const avatar = "https://res.cloudinary.com/dchppqmwt/image/upload/v1715403320/avatar_ippqvo.png";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingWhatsApp
      phoneNumber="573112793529"
      accountName="Vintage Outfits"
      allowEsc
      allowClickAway
      notification
      notificationSound
      chatMessage="Hola, ¿cómo podemos ayudarte?"
      statusMessage="En Linea"
      avatar={avatar}
      
    />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
