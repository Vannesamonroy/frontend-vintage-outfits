import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";
import { useDispatch } from "react-redux";
import { resetCart, closeCart } from "../../redux/cartReducer";
import { FormControl } from '@mui/base/FormControl';
import "./FormShipping.scss"



const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 4,
    WebkitBoxShadow: '0px 0px 7px -5px rgba(0, 0, 0, 0.5)',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
  borderRadius: '15px',
};

export default function FormShipping({products}) {
    const dispatch = useDispatch();
    const initialFormData = {
        name: "",
        address: "",
        phone: "",
    };
    const [preferenceId, setPreferenceId] = useState(null);
    initMercadoPago("TEST-f09e41f7-6c41-46ee-897b-6e78e22e0c72", {
        locale: "es-CO",
  });
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState(initialFormData);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        dispatch(closeCart());
        setFormData(initialFormData); // Restablece el formulario al estado inicial al cerrar el modal
    };

    const createPreference = async (productsComplete) => {
        try {
          console.log(products)
          const response = await axios.post(
            "http://localhost:1337/api/mercadopago",
            productsComplete,
            {
              headers: {
                Authorization: `Bearer  ${process.env.REACT_APP_API_TOKEN}`,
              },
            }
          );
          console.log(response)
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            products: products,
            FormData:formData
        }
        console.log(payload)
        const id = await createPreference(payload);
        console.log(id)
        if (id) {
            setPreferenceId(id);
            dispatch(resetCart());
          }
        
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const styles = {
        padding: "10px",
    }

    const styleButon = {
        marginTop : "20px",
        alignSelf: "center",
        backgroundColor: "#2bbb6a",
    }
    return (
        <div>
            <button onClick={handleOpen}>FINALIZAR COMPRA</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="form-container">
                    <Typography id="modal-modal-title" variant="h6" component="h1">
                        Complete los datos de envío y cliente
                    </Typography>
                    <form onSubmit={handleSubmit}>
                    {products.map((product) => (
                            <div key={product.id}>
                                <Typography>{product.title} - ${product.quantity*product.price}</Typography>

                            </div>
                        ))}
                        <TextField id="name" name="name" label="Nombre" value={formData.name} onChange={handleChange} fullWidth style={{...styles, marginTop: "20px"}}/>
                        <TextField id="address" name="address" label="Dirección" value={formData.address} onChange={handleChange} fullWidth style={styles}/>
                        <TextField id="phone" name="phone" label="phone" value={formData.phone} onChange={handleChange} fullWidth style={styles}/>
                        <Button variant="contained" type='submit' style={styleButon}>Enviar</Button>
                        {preferenceId && (<Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'modal' }}
                            />
                            )}
                    </form>
                </Box>
                
            </Modal>
        </div>
    );
}

// function FormShipping() {
//   return (
//     <div>FormShipping</div>
//   )
// }

// export default FormShipping