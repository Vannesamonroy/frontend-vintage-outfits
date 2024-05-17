import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

//   return (
//     <div className="navbar">
//       <div className="wrapper">
//         <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           <MenuIcon />
//         </div>
//         <div className={isMenuOpen ? "menu-open" : "menu-closed"}>
//           <div className="left">
//             <Link className="link" to="/products/1">Mujeres</Link>
//             <Link className="link" to="/products/2">Hombres</Link>
//             <Link className="link" to="/products/3">Calcetines</Link>
//           </div>
//           <div className="center">
//             <Link className="link" to="/">VINTAGE OUTFITS</Link>
//           </div>
//           <div className="right">
//             <Link className="link" to="/">Inicio</Link>
//             <Link className="link" to="/">Nosotros</Link>
//             <Link className="link" to="/">Contacto</Link>
//             <Link className="link" to="/">Tienda</Link>
//             <div className="icons">
//               <SearchIcon />
//               <PersonOutlineOutlinedIcon />
//               <FavoriteBorderOutlinedIcon />
//               <div className="cartIcon" onClick={() => setOpen(!open)}>
//                 <ShoppingCartOutlinedIcon />
//                 <span>{products.length}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {open && <Cart />}
//     </div>
//   );
// };

// export default Navbar;
  return (
    <div className="navbar">
      <div className="wrapper">
      
        <div className="left">
          {/* <div className="item">
              <img src="/img/en.png" alt="" />
              <KeyboardArrowDownIcon />
            </div> */}
          {/* <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div> */}
          <div className="item">
            <Link className="link" to="/products/2">
              Mujeres
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Hombres
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">
              Calcetines
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            VINTAGE OUTFITS
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Inicio
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Nosotros
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contacto
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Tienda
            </Link>
          </div>
          <div className="icons">
            {/*<SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            */}
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
        <div className="menuIcon">
          <MenuIcon onClick={() => {
            console.log("click menuIcon");
            setIsMenuOpen(!isMenuOpen)}} />
        </div>
        <div className={isMenuOpen ? "menu-open" : "menu-closed" }>
        <div className="left-menu">
          {/* <div className="item">
              <img src="/img/en.png" alt="" />
              <KeyboardArrowDownIcon />
            </div> */}
          {/* <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div> */}
          <div className="item-menu" onClick={() => {
            console.log("click menuIcon");
            setIsMenuOpen(!isMenuOpen)}}>
            <Link className="link" to="/products/2">
              Mujeres
            </Link>
          </div>
          <div className="item-menu" onClick={() => {
            console.log("click menuIcon");
            setIsMenuOpen(!isMenuOpen)}}>
            <Link className="link" to="/products/3">
              Hombres
            </Link>
          </div>
          <div className="item-menu" onClick={() => {
            console.log("click menuIcon");
            setIsMenuOpen(!isMenuOpen)}}>
            <Link className="link" to="/products/4">
              Calcetines
            </Link>
          </div>
        </div>
        <div className="right-menu" onClick={() => {
            console.log("click menuIcon");
            setIsMenuOpen(!isMenuOpen)}}>
          <div className="item-menu">
            <Link className="link" to="/">
              Inicio
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Nosotros
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contacto
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Tienda
            </Link>
          </div>
          <div className="icons">
            {/*<SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />*/}
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
