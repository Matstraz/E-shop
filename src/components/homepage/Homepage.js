import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";

export default function Homepage() {
  const [shoppingCart, setShoppingCart] = useState(0);

  return (
    <div>
      <Header shoppingCart={shoppingCart} />
      <Hero shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
    </div>
  );
}
