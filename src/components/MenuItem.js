import React from "react";

import ShoppingCartIcon from '@material-ui/icons//ShoppingCart';

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p><span style={{fontSize:'16px', fontWeight:'bold'}}>Price:</span> ${price} </p>
      <button type="submit"> <ShoppingCartIcon  style={{fontSize:'20px', marginLeft:'10px'}}/> Order Now</button>
    </div>
  );
}

export default MenuItem ;
