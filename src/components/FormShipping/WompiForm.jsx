import React, { useEffect, useState } from 'react';

const WompiForm = ({products}) => {
    const [scriptInserted, setScriptInserted] = useState(false);
    
    const totalPrice = products.reduce((total, product) => total + product.price*product.quantity, 0);
   
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://checkout.wompi.co/widget.js";
    script.setAttribute("data-render", "button");
    script.setAttribute("data-public-key", "pub_test_K1VKFsBJTHHp8znpwWHuJvlSHWqELkRc");
    script.setAttribute("data-currency", "COP");
    script.setAttribute("data-amount-in-cents", totalPrice*100);
    script.setAttribute("data-reference", "4XMPGKWWPKWQL");
    script.setAttribute("data-signature:integrity", "94e126e12ac4cc1aaa5028a7e9c45049ce29f2ad7fea9dee981844ffdba02f8e");

    const form = document.getElementById('wompiWidget');
    form.appendChild(script);

    return () => {
      form.removeChild(script);
    };
  }, [totalPrice]);

  return (
    <div id="wompiWidget">
      {/* Aquí puedes colocar cualquier contenido adicional si es necesario */}
    </div>
  );
};

export default WompiForm;