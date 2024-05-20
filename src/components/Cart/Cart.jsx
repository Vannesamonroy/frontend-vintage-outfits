import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";

// const Cart = () => {
//   const products = useSelector((state) => state.cart.products);
//   console.log(products);
//   const dispatch = useDispatch();

//   const totalPrice = () => {
//     let total = 0;
//     products.forEach((item) => {
//       total += item.quantity * item.price;
//     });
//     return total.toFixed(2);
//   };

//   const stripePromise = loadStripe(
//     "pk_test_51Nj0KuKD8ojf0yJgj8LF8BRZ8yV48MwHvXPHA06ZfMtjMnSe36YZeFoiJhSp8l2uUI0k07AAlfogdUy31vdutsFW00umtcpWjG"
//   );
//   const handlePayment = async () => {
//     try {
//       const stripe = await stripePromise;
//       console.log(products)
//       const res = await makeRequest.post("/orders", {
//         products,
//       });
//       await stripe.redirectToCheckout({
//         sessionId: res.data.stripeSession.id,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="cart">
//       <h1>Productos en el carrito</h1>
//       {products?.map((item) => (
//         <div className="item" key={item.id}>
//           <img src={item.img} alt="" />
//           <div className="details">
//             <h1>{item.title}</h1>
//             <p>{item.desc?.substring(0, 100)}</p>
//             <div className="price">
//               {item.quantity} x ${item.price}
//             </div>
//           </div>
//           <DeleteOutlinedIcon
//             className="delete"
//             onClick={() => dispatch(removeItem(item.id))}
//           />
//         </div>
//       ))}
//       <div className="total">
//         <span>SUBTOTAL</span>
//         <span>${totalPrice()}</span>
//       </div>
//       <button onClick={handlePayment}>Ir a pagar</button>
//       <span className="reset" onClick={() => dispatch(resetCart())}>
//         Borrar Carrito
//       </span>
//     </div>
//   );
// };

const Cart = () => {
  
  const products = useSelector((state) => state.cart.products);
  console.log(products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-f09e41f7-6c41-46ee-897b-6e78e22e0c72", {
    locale: "es-CO",
  });

    const createPreference = async () => {
    try {
      console.log(products)
      const response = await axios.post(
        "http://localhost:1337/api/mercadopago",
        products,
        {
          headers: {
            Authorization: `Bearer 3c576ddee01505bbd36c7fec553ad1e22a9ba63a1cccea0038c448f060d196e99386c819ff993e3338325f47b76532803b0ff3d3402f28e1ac6e5cfbb8602eb1bb71208824bf869e9e3279ff16e23dc384aab1e6ae2a462234557793c5985cd9e8658db42f78897d70eebd076999048d1bbceb203a3d6058a565e3573f95e735`,
          },
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };
  return (
    <div className="cart">
      <h1>Productos en el carrito</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handleBuy}>Ir a pagar</button>
      
      {preferenceId && (
            <Wallet
              initialization={{ preferenceId: preferenceId, redirectMode: 'modal' }}
            />
          )}
      
      
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Borrar Carrito
      </span>
    </div>
  );
}

export default Cart;
