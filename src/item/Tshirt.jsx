import React from "react";
import tshirt1 from "../Images/tshirt1.avif";
import tshirt2 from "../Images/tshirt2.avif";
import tshirt3 from "../Images/tshirt3.avif";
import tshirt4 from "../Images/tshirt4.avif";
import tshirt6 from "../Images/tshirt6.avif";
import tshirt7 from "../Images/tshirt7.avif";
import tshirt8 from "../Images/tshirt8.avif";
import tshirt9 from "../Images/tshirt9.avif";
import tshirt10 from "../Images/tshirt10.avif";

function Tshirt({ addToCart }) {
    const tshirts = [
        {
          id: 1,
          name: "Men's White Formal Shirt",
          price: "₹999",
          image: tshirt1
        },
        {
          id: 2,
          name: "Men's Blue Casual Shirt",
          price: "₹899",
          image: tshirt2
        },
        {
          id: 3,
          name: "Men's Denim Shirt",
          price: "₹1299",
          image: tshirt3
        },
        {
          id: 4,
          name: "Men's Black Shirt",
          price: "₹799",
          image: tshirt4
        },
        {
          id: 5,
          name: "Men's Checked Shirt",
          price: "₹849",
          image: tshirt6
        },
        {
          id: 6,
          name: "Men's Linen Shirt",
          price: "₹1499",
          image: tshirt6
        },
        {
          id: 7,
          name: "Men's Printed Shirt",
          price: "₹1099",
          image: tshirt7
        },
        {
          id: 8,
          name: "Men's Party Wear Shirt",
          price: "₹1599",
          image: tshirt8
        },
         {
          id: 9,
          name: "Men's Printed Shirt",
          price: "₹1099",
          image: tshirt9
        },
        {
          id: 10,
          name: "Men's Cotton Shirt",
          price: "₹699",
          image: tshirt6
        },
         {
          id: 11,
          name: "Men's Party Wear Shirt",
          price: "₹1599",
          image: tshirt3
        },
        {
          id: 12,
          name: "Men's Slim Fit Shirt",
          price: "₹1199",
          image: tshirt10
        }
        
      ];
    
 return (
  <div className="products">
    {tshirts.map((item) => (
      <div className="card" key={item.id}>
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.price}</p>

        <button onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      </div>
    ))}
  </div>
);
}

export default Tshirt;