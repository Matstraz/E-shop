import icons from "../util/Icons";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BodyContent({
  shoppingCart,
  setShoppingCart,
  wished,
  setWished,
}) {
  const [mainPhoto, setMainPhoto] = useState([]);
  const [carouselPhoto, setCarouselPhoto] = useState([]);
  const [size39, setSize39] = useState(false);
  const [size40, setSize40] = useState(false);
  const [size405, setSize405] = useState(false);
  const [size41, setSize41] = useState(false);
  const [size42, setSize42] = useState(false);
  const [size425, setSize425] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((json) => json.filter((el) => el.id < 7))
      .then((data) => {
        setMainPhoto(data[0]); //MAIN PHOTO URL
        setCarouselPhoto([
          ...data.filter((el) => el.id > 1).map((el) => el), //CAROUSEL PHOTOS
        ]);
      });
  }, []);

  //CHANGE MAIN PRODUCT IMAGE THROUGH CAROUSEL PICS
  function handleMainProductImage(e) {
    setMainPhoto({
      url: e.target.src,
      id: e.target.alt,
      title: e.target.title,
      price: "109,99 €",
    });
    setWished(false);
  }

  //SIZE SELECTOR [You could useRef (const ref = useRef() // ref.current.classList.add('class')), but having a state is useful to set a condition in order to save the user's data.]
  function handleSize39() {
    !size39 ? setSize39(true) : setSize39(false);
    setWished(false);
  }
  function handleSize40() {
    !size40 ? setSize40(true) : setSize40(false);
    setWished(false);
  }
  function handleSize405() {
    !size405 ? setSize405(true) : setSize405(false);
    setWished(false);
  }
  function handleSize41() {
    !size41 ? setSize41(true) : setSize41(false);
    setWished(false);
  }
  function handleSize42() {
    !size42 ? setSize42(true) : setSize42(false);
    setWished(false);
  }
  function handleSize425() {
    !size425 ? setSize425(true) : setSize425(false);
    setWished(false);
  }

  //ADD TO CART
  function handleCart() {
    setShoppingCart(shoppingCart + 1);
    //DEVE AGGIUNGERE AL LOCAL STORAGE o FARE UNA CHIAMATA POST
  }

  //ADD TO WISHLIST
  function handleWish() {
    !wished ? setWished(true) : setWished(false);
    //DEVE AGGIUNGERE AL LOCAL STORAGE o FARE UNA CHIAMATA POST
  }

  //REQUIRED CAROUSEL VARIABLE
  const responsive = {
    LargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 769 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <main>
      <div className="w-10/12 m-auto flex">
        <article className="w-2/3 grid grid-cols-2 gap-3">
          <img src={mainPhoto.url} alt="photo1"></img>
          <img src={mainPhoto.url} alt="photo1"></img>
          <img src={mainPhoto.url} alt="photo1"></img>
          <img src={mainPhoto.url} alt="photo1"></img>
          <img src={mainPhoto.url} alt="photo1"></img>
          <img src={mainPhoto.url} alt="photo1"></img>
        </article>
        <aside className="w-1/3 px-9">
          <div className="font-bold ">
            <p className="pt-1 text-xl">Title: {mainPhoto.title}</p>
            <p className="text-xs pt-2">ID: {mainPhoto.id}</p>
            <p className="pt-4">
              {mainPhoto.price ? mainPhoto.price : "624,99 €"}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-1 mt-24 ">
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
        </aside>
      </div>
      <div className="p-10 w-11/12 m-auto">
        <p className="font-bold">Related Procducts</p>
        {/* CAROUSEL */}
        <Carousel responsive={responsive} centerMode={true} className="mt-4">
          {carouselPhoto.map((el, index) => (
            <div key={el.id + index}>
              <img
                src={el.url}
                alt={el.id}
                title={el.title}
                className="pr-5 cursor-pointer"
                onClick={handleMainProductImage}
              ></img>
              <div className="pt-2 pr-5 text-xs">
                <p className="font-bold pt-1">Title: {el.title}</p>
                <p className="text-slate-500 pt-2">ID: {el.id}</p>
                <p className="font-bold pt-2">109,99 €</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </main>
  );
}
