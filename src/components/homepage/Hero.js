import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Hero({ shoppingCart, setShoppingCart }) {
  const responsive = {
    superLargeDesktop: {
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
  const [mainPhoto, setMainPhoto] = useState([]);
  const [carillonPhoto, setCarillonPhoto] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((json) => json.filter((el) => el.id < 7))
      .then((data) => {
        setMainPhoto([data[0].url]); //MAIN PHOTO URL
        setCarillonPhoto([
          ...data.filter((el) => el.id > 1).map((el) => el.url), //CARILLON PHOTOS URLs
        ]);
      });
  }, []);

  /*   onclick(e){
e.target.qualcosa (ad esempio alt o src)
setMainPhoto([e.target.qualcosa]) // al click dlle foto del carillion
  } */

  function handleCart() {
    setShoppingCart(shoppingCart + 1);
  }

  return (
    <div>
      <main className="w-10/12 m-auto flex">
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
      </main>
      <div>
        <Carousel
          responsive={responsive}
          centerMode={true}
          className="p-8 w-11/12 m-auto "
        >
          {carillonPhoto.map((el) => (
            <div>
              <img src={el} alt={el} className=" pr-5"></img>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
