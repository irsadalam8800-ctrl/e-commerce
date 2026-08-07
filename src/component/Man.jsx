import React from "react";
import Shirt from "../item/Shirt";

function Man({ addToCart }) {
  return (
    <>
      <Shirt addToCart={addToCart} />
    </>
  );
}

export default Man;