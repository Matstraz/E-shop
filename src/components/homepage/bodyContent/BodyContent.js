import icons from "../../util/Icons";
import { useEffect, useState } from "react";
import { Accordion, Rating } from "flowbite-react";
import MainProducts from "./MainProducts";
import MainCarousel from "./MainCarousel";

export default function BodyContent({
  shoppingCart,
  setShoppingCart,
  wished,
  setWished,
}) {
  const [mainProductData, setMainProductData] = useState([]);
  const [carouselProductsData, setCarouselProductsData] = useState([]);
  const [size39, setSize39] = useState(false);
  const [size40, setSize40] = useState(false);
  const [size405, setSize405] = useState(false);
  const [size41, setSize41] = useState(false);
  const [size42, setSize42] = useState(false);
  const [size425, setSize425] = useState(false);
  const [wishList, setWishlist] = useState(mainProductData);
  const [cartList, setCartlist] = useState(mainProductData);

  //-- INITIAL VALUE REQUEST
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((json) => json.filter((el) => el.id < 7))
      .then((data) => {
        setMainProductData({ ...data[0], price: "624,99 €" }); //INITIAL MAIN PRODUCT DATA
        setCarouselProductsData([
          ...data.filter((el) => el.id > 1), //CAROUSEL PRODUCT DATA
        ]);
      });
  }, []);

  //-- SIZE SELECTOR [Note: you could useRef (creating a ref const for each size, const ref = useRef() // ref.current.classList.add('class')), but having a state is useful in order to set a condition to save the user's data.]
  function handleSize39() {
    if (!size39) {
      setSize39(true);
      setSize40(false);
      setSize405(false);
      setSize41(false);
      setSize42(false);
      setSize425(false);
    }
    setWished(false);
  }
  function handleSize40() {
    if (!size40) {
      setSize39(false);
      setSize40(true);
      setSize405(false);
      setSize41(false);
      setSize42(false);
      setSize425(false);
    }
    setWished(false);
  }
  function handleSize405() {
    if (!size405) {
      setSize39(false);
      setSize40(false);
      setSize405(true);
      setSize41(false);
      setSize42(false);
      setSize425(false);
    }
    setWished(false);
  }
  function handleSize41() {
    if (!size41) {
      setSize39(false);
      setSize40(false);
      setSize405(false);
      setSize41(true);
      setSize42(false);
      setSize425(false);
    }
    setWished(false);
  }
  function handleSize42() {
    if (!size42) {
      setSize39(false);
      setSize40(false);
      setSize405(false);
      setSize41(false);
      setSize42(true);
      setSize425(false);
    }
    setWished(false);
  }
  function handleSize425() {
    if (!size425) {
      setSize39(false);
      setSize40(false);
      setSize405(false);
      setSize41(false);
      setSize42(false);
      setSize425(true);
    }
    setWished(false);
  }

  //-- ADD TO CART (DATA LOGGED INTO CONSOLE THANKS TO A FAKE API & A POST REQUEST)

  //ADD SIZE TO 'mainProductData' (THIS INFO IS NOT PROVIDED BY DEFAULT)
  useEffect(() => {
    size39 && setMainProductData({ ...mainProductData, size: 39 });
    size40 && setMainProductData({ ...mainProductData, size: 40 });
    size405 && setMainProductData({ ...mainProductData, size: 40.5 });
    size41 && setMainProductData({ ...mainProductData, size: 41 });
    size42 && setMainProductData({ ...mainProductData, size: 42 });
    size425 && setMainProductData({ ...mainProductData, size: 42.5 });
    // eslint-disable-next-line
  }, [size39, size40, size405, size41, size42, size425]);

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

  //-- ADD TO WISHLIST (DATA SAVED IN LOCAL STORAGE)
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
    <main>
      <div className="w-11/12 xl:w-10/12 m-auto flex flex-col xl:flex-row">
        <MainProducts mainProductData={mainProductData} />
        <aside className="xl:w-1/3 px-3 xl:px-14">
          <div className="font-bold hidden md:block">
            <p className="pt-1 text-xl">Title: {mainProductData.title}</p>
            <p className="text-xs pt-2">ID: {mainProductData.id}</p>
            <p className="pt-4">
              {mainProductData.price ? mainProductData.price : "624,99 €"}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-1 mt-12 md:mt-24 ">
            <p className="col-span-3 font-bold">Seleziona la taglia/misura</p>{" "}
            {/* SIZE SELECTORS */}
            <button
              className="border rounded-md py-2 bg-slate-100 text-slate-300"
              disabled
            >
              EU 38
            </button>
            <button
              className="border rounded-md py-2 bg-slate-100 text-slate-300"
              disabled
            >
              EU 38.5
            </button>
            <button
              className={
                !size39
                  ? "border rounded-md py-2"
                  : "border  border-black rounded-md py-2"
              }
              onClick={handleSize39}
            >
              EU 39
            </button>
            <button
              className={
                !size40
                  ? "border rounded-md py-2"
                  : "border  border-black rounded-md py-2"
              }
              onClick={handleSize40}
            >
              EU 40
            </button>
            <button
              className={
                !size405
                  ? "border rounded-md py-2"
                  : "border  border-black rounded-md py-2"
              }
              onClick={handleSize405}
            >
              EU 40.5
            </button>
            <button
              className={
                !size41
                  ? "border rounded-md py-2"
                  : "border  border-black rounded-md py-2"
              }
              onClick={handleSize41}
            >
              EU 41
            </button>
            <button
              className={
                !size42
                  ? "border rounded-md py-2"
                  : "border  border-black rounded-md py-2"
              }
              onClick={handleSize42}
            >
              EU 42
            </button>
            <button
              className={
                !size425
                  ? "border rounded-md py-2"
                  : "border  border-black rounded-md py-2"
              }
              onClick={handleSize425}
            >
              EU 42.5
            </button>
            <button
              className="border rounded-md py-2 bg-slate-100 text-slate-300"
              disabled
            >
              EU 43
            </button>
          </div>
          {/* INTERACTIVE BUTTONS */}
          <div className="flex flex-col mt-3">
            <button
              onClick={handleCart}
              className="p-3 bg-black text-white rounded-full"
            >
              Add To Cart
            </button>
            <button
              className="p-3 border-2 rounded-full mt-3"
              onClick={handleWish}
            >
              Add To Wishlist &nbsp; {icons.bodyContent.heart}
            </button>
          </div>
          <div className="mt-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto dolor sed asperiores nam, perferendis consequatur,
              aspernatur eum, neque hic ab dignissimos laboriosam corporis
              commodi iste nulla non deserunt ex alias cupiditate labore.
              Repellat, quos mollitia recusandae dolores illo, totam tempora
              natus doloribus voluptatibus expedita temporibus.
            </p>
            <ul className="mt-10 list-disc list-inside text-justify">
              <li>Color: Black</li>
              <li>Product ID: {mainProductData.id}</li>
            </ul>
          </div>
          {/* ACCORDION */}
          <div className="mt-12">
            <Accordion alwaysOpen={true}>
              <Accordion.Panel>
                <Accordion.Title>
                  <p className="font-bold text-lg text-black">Shipping Rules</p>
                </Accordion.Title>
                <Accordion.Content>
                  <p className="my-5 px-2">Lorem ipsum dolor sic amet</p>
                  <ul className="list-disc px-2">
                    <li className="text-sm text-justify">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aperiam veniam adipisci tenetur consequatur porro magni.
                      <a href="/" className="font-bold">
                        Generic Link
                      </a>
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                  <div className="flex justify-around items-center">
                    <p className="font-bold text-lg text-black pr-3">
                      Ratings(4)
                    </p>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </div>
                </Accordion.Title>
                <Accordion.Content>
                  <div className="flex justify-between">
                    <div className="font-bold">UserNumber1(93)</div>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                    </Rating>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-bold">UserNumber2(62)</div>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-bold">UserNumber3(7)</div>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                    </Rating>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-bold">UserNumber4(80)</div>
                    <Rating>
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star />
                      <Rating.Star filled={false} />
                    </Rating>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </aside>
      </div>
      <MainCarousel
        carouselProductsData={carouselProductsData}
        setMainProductData={setMainProductData}
        setSize39={setSize39}
        setSize40={setSize40}
        setSize405={setSize405}
        setSize41={setSize41}
        setSize42={setSize42}
        setSize425={setSize425}
        setWished={setWished}
      />
    </main>
  );
}
