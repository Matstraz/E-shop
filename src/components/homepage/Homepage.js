import { useState } from "react";
import BodyContent from "./BodyContent";
import Header from "./Header";

export default function Homepage() {
  const [shoppingCart, setShoppingCart] = useState(0);
  const [wished, setWished] = useState(false);

  return (
    <div>
      <Header shoppingCart={shoppingCart} wished={wished} />
      <BodyContent
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        wished={wished}
        setWished={setWished}
      />
    </div>
  );
}
