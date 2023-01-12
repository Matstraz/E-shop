import { useEffect, useState } from "react";
import icons from "../../../util/Icons";

export default function InteractiveButtons({
  size39,
  size40,
  size405,
  size41,
  size42,
  size425,
  shoppingCart,
  setShoppingCart,
  mainProductData,
  wished,
  setWished,
}) {
  const [wishList, setWishlist] = useState(mainProductData);
  const [cartList, setCartlist] = useState(mainProductData);

  //-- ADD DATA TO CART (DATA LOGGED INTO CONSOLE THANKS TO A FAKE API & A POST REQUEST)

  function handleCart() {
    //SIZE SELECTION CONTROL
    if (
      !size39 &&
      !size40 &&
      !size39 &&
      !size405 &&
      !size41 &&
      !size42 &&
      !size425
    ) {
      alert("A size must be selected!");
    } else {
      setShoppingCart(shoppingCart + 1); //COUNTER INCREMENT
      setCartlist([...cartList, mainProductData]); //ADD EACH ELEMENT TO THE "cartList" ARRAY
    }
  }

  //DECLARE AN ARRAY OBJ WITH RELEVANT INFO FROM 'cartList'
  useEffect(() => {
    let neededInfoObj = cartList.map((el) => ({
      title: el.title,
      id: el.id,
      size: el.size,
      price: el.price,
    }));

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ neededInfoObj }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [cartList]);

  //-- ADD DATA TO WISHLIST (DATA SAVED IN LOCAL STORAGE)

  function handleWish() {
    !wished ? setWished(true) : setWished(false);
    if (wishList.includes(mainProductData)) {
      setWishlist(wishList);
      alert("This element is in your wishlist yet");
    } else {
      setWishlist([...wishList, mainProductData]);
      alert("Item added to your wishlist successfully");
    }
  }

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  return (
    <div className="flex flex-col mt-3">
      <button
        onClick={handleCart}
        className="p-3 bg-black text-white rounded-full"
      >
        Add To Cart
      </button>
      <button className="p-3 border-2 rounded-full mt-3" onClick={handleWish}>
        Add To Wishlist &nbsp; {icons.bodyContent.heart}
      </button>
    </div>
  );
}
