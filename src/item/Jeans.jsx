import React from 'react'
import jeans1 from "../Images/jeans1.avif";
import jeans2 from "../Images/jeans2.avif";
import jeans3 from "../Images/jeans3.avif";
import jeans4 from "../Images/jeans4.avif";

import jeans6 from "../Images/jeans6.avif";
import jeans7 from "../Images/jeans7.avif";
import jeans8 from "../Images/jeans8.avif";
import jeans9 from "../Images/jeans9.avif";
import jeans10 from "../Images/jeans10.avif";

function Jeans({ addToCart }) {
    const jeans = [
        {
          id: 1,
          name: "Men's White Formal Jeans",
          price: "₹999",
          image: jeans1
        },
        {
          id: 2,
          name: "Men's Blue Casual Jeans",
          price: "₹899",
          image: jeans2
        },
        {
          id: 3,
          name: "Men's Denim Jeans",
          price: "₹1299",
          image: jeans3
        },
        {
          id: 4,
          name: "Men's Black Jeans",
          price: "₹799",
          image: jeans4
        },
        {
          id: 5,
          name: "Men's Checked Jeans",
          price: "₹849",
          image: jeans1
        },
        {
          id: 6,
          name: "Men's Linen Jeans",
          price: "₹1499",
          image: jeans6
        },
        {
          id: 7,
          name: "Men's Printed Jeans",
          price: "₹1099",
          image: jeans7
        },
        {
          id: 8,
          name: "Men's Party Wear Jeans",
          price: "₹1599",
          image: jeans8
        },
         {
          id: 9,
          name: "Men's Printed Jeans",
          price: "₹1099",
          image: jeans7
        },
        {
          id: 10,
          name: "Men's Cotton Jeans",
          price: "₹699",
          image: jeans9
        },
         {
          id: 11,
          name: "Men's Party Wear Jeanst",
          price: "₹1599",
          image: jeans8
        },
        {
          id: 12,
          name: "Men's Slim Fit Jeans",
          price: "₹1199",
          image: jeans10
        }
        
      ];
    
  return (
    <div>
      <div className="products">
    {jeans.map((item) => (
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
    </div>
  )
}

export default Jeans
