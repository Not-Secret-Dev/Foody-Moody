import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import "./App.css";

const products = [
  {
    id: 1,
    src: "/images/Products/Burger.jpeg",
    title: "Burgers",
    desc: `A perfectly grilled patty in a toasted bun, topped with fresh lettuce, tomato, melted cheese, and your favorite condiments for a delicious bite!`,
    price: "$10",
  },
  {
    id: 2,
    src: "/images/Products/Pizza.jpeg",
    title: "Pizza",
    desc: `Cheesy and delicious pizza with a crispy crust, topped with fresh tomatoes, basil, and your choice of toppings. Take a bite and you won't be able to resist the delight of it`,
    price: "$15",
  },
  {
    id: 3,
    src: "/images/Products/Sushi.jpeg",
    title: "Sushi",
    desc: `Freshly made sushi rolls with premium fish, vegetables, and perfectly seasoned rice for a delightful culinary experience. Just a bite and you won't be able to resist it`,
    price: "$18",
  },
  {
    id: 4,
    src: "/images/Products/Biryani.jpeg",
    title: "Biryani",
    desc: `A fragrant, spiced rice dish layered with tender meat or vegetables, infused with aromatic spices and served with raita.`,
    price: "$12",
  },
  {
    id: 5,
    src: "/images/Products/Loaded Fries.jpeg",
    title: "Loaded Fries",
    desc: `Crispy fries topped with melted cheese, savory meat, and drizzled with your favorite sauces for the ultimate comfort food.`,
    price: "$7",
  },
  {
    id: 6,
    src: "/images/Products/Nuggets.jpeg",
    title: "Nuggets",
    desc: `Crispy, golden chicken nuggets served with a variety of dipping sauces for a quick and tasty snack.`,
    price: "$6",
  },
  {
    id: 7,
    src: "/images/Products/Shawarma.jpeg",
    title: "Shawarma",
    desc: `Succulent slices of spiced meat, wrapped in warm pita bread with fresh vegetables and drizzled with creamy tahini or garlic sauce.`,
    price: "$8",
  },
  {
    id: 8,
    src: "/images/Products/Tacos.jpeg",
    title: "Tacos",
    desc: `Crispy tortillas filled with seasoned beef, fresh lettuce, cheese, and topped with zesty salsa for a flavorful bite!`,
    price: "$4 (each)",
  },
];

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <p className="products-text">Our Products</p>
        <div className="cards">
          {products.map((product) => (
            <Card
              key={product.id}
              src={product.src}
              title={product.title}
              desc={product.desc}
              price={product.price}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
