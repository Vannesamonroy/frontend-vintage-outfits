import React from "react";
import "./Cart.scss";
import FormShipping from "../FormShipping/FormShipping";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";



const Cart = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);
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
        `${process.env.REACT_APP_API_URL}/mercadopago`,
        products,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
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
      // dispatch(resetCart());
    }
  };
  const handleMercadoPagoModalClose = () => {
    // Aquí se restablece el carrito al cerrar el modal de Mercado Pago
    dispatch(resetCart());
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
      {/* <button onClick={handleBuy}>Ir a pagar</button> */}
      
      {/* {preferenceId && (
            <Wallet
              initialization={{ preferenceId: preferenceId, redirectMode: 'modal' }}
              onClose={handleMercadoPagoModalClose}
            />
          )} */
          <FormShipping products={products}/>
          }

      
      
      <span className="reset" onClick={() => dispatch(resetCart())}>
        <DeleteIcon/>
      </span>
    </div>
  );
}

export default Cart;
