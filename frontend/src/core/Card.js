import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  //   function(f){return f}
  reload = undefined
}) => {

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";



 
  const contatcUs = () => (
    <a className="btn btn-sm btn-danger" href={'https://api.whatsapp.com/send/?phone=918101519599&text&app_absent=0'}>Contact Us</a>
    )
  

  
  return (
    <div className="border border-danger ">
      <div className="card-header lead">{cartTitle}</div>
      <div className="card-body">
        <ImageHelper product={product} />
        <p className="lead  font-weight-normal text-wrap">
          {cartDescrption}
        </p>
        <p className="btn text-white rounded  btn-sm px-4"> ₹ {cartPrice}</p>
        <br />
        <p className="btn btn-danger btn-sm ">{contatcUs()} </p>
        <div className="row">
        </div>
      </div>
    </div>
  );
};

export default Card;
