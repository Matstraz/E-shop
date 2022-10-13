import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BodyContent({ shoppingCart, setShoppingCart }) {
  const [mainPhoto, setMainPhoto] = useState([]);
  const [carouselPhoto, setCarouselPhoto] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((json) => json.filter((el) => el.id < 7))
      .then((data) => {
        setMainPhoto([data[0].url]); //MAIN PHOTO URL
        setCarouselPhoto([
          ...data.filter((el) => el.id > 1).map((el) => el), //CAROUSEL PHOTOS URLs
        ]);
      });
  }, []);

  //CHANGE MAIN PRODUCT IMAGE CLICKING ON CAROUSEL PICS
  function handleMainProductImage(e) {
    setMainPhoto(e.target.src);
  }

  function handleCart() {
    setShoppingCart(shoppingCart + 1);
    console.log(carouselPhoto);
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
          <img src={mainPhoto} alt="photo1"></img>
          <img src={mainPhoto} alt="photo1"></img>
          <img src={mainPhoto} alt="photo1"></img>
          <img src={mainPhoto} alt="photo1"></img>
          <img src={mainPhoto} alt="photo1"></img>
          <img src={mainPhoto} alt="photo1"></img>
        </article>
        <aside className="w-1/3">
          <button onClick={handleCart}> add</button>
        </aside>
      </div>
      <div className="p-10 w-11/12 m-auto">
        <p className="font-bold">Related Procducts</p>
        <Carousel responsive={responsive} centerMode={true} className="mt-4">
          {carouselPhoto.map((el, index) => (
            <div key={el.id + index}>
              <img
                src={el.url}
                alt={el.id}
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
