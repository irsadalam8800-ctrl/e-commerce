import React from "react";
import "./Shirt.css"
import image1 from "../Images/image1.avif";
import image2 from "../Images/image2.webp";
import image3 from "../Images/image3.avif";
import image4 from "../Images/image4.avif";
import image5 from "../Images/image5.avif";
import image6 from "../Images/image6.avif";
import image7 from "../Images/image7.avif";
import image8 from "../Images/image8.avif";
import image9 from "../Images/image9.avif";
import image10 from "../Images/image10.avif";

function Shirt({ addToCart }) {

 const shirts = [
    {
      id: 1,
      name: "Men's White Formal Shirt",
      price: "₹999",
      image: image1
    },
    {
      id: 2,
      name: "Men's Blue Casual Shirt",
      price: "₹899",
      image: image2
    },
    {
      id: 3,
      name: "Men's Denim Shirt",
      price: "₹1299",
      image: image3
    },
    {
      id: 4,
      name: "Men's Black Shirt",
      price: "₹799",
      image: image4
    },
    {
      id: 5,
      name: "Men's Checked Shirt",
      price: "₹849",
      image: image5
    },
    {
      id: 6,
      name: "Men's Linen Shirt",
      price: "₹1499",
      image: image6
    },
    {
      id: 7,
      name: "Men's Printed Shirt",
      price: "₹1099",
      image: image7
    },
    {
      id: 8,
      name: "Men's Party Wear Shirt",
      price: "₹1599",
      image: image8
    },
     {
      id: 9,
      name: "Men's Printed Shirt",
      price: "₹1099",
      image: image7
    },
    {
      id: 10,
      name: "Men's Cotton Shirt",
      price: "₹699",
      image: image9
    },
     {
      id: 11,
      name: "Men's Party Wear Shirt",
      price: "₹1599",
      image: image8
    },
    {
      id: 12,
      name: "Men's Slim Fit Shirt",
      price: "₹1199",
      image: image10
    }
    
  ];

  return (
    <div className="products">
      {shirts.map((shirt) => (
        <div className="card" key={shirt.id}>
          <img src={shirt.image} alt={shirt.name} />
          <h3>{shirt.name}</h3>
          <p>{shirt.price}</p>
         <button onClick={() => addToCart(shirt)}>
  Add to Cart
</button>
        </div>
      ))}
    </div>
  );
}

export default Shirt;