import { useState } from "react";
import BodyContent from "./BodyContent";
import Header from "./Header";

export default function Homepage() {
  const [shoppingCart, setShoppingCart] = useState(0);

  return (
    <div>
      <Header shoppingCart={shoppingCart} />
      <BodyContent
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </div>
  );
}
