import { useEffect, useState } from "react";
import MainProducts from "./MainProducts";
import MainCarousel from "./MainCarousel";
import Aside from "./Aside/Aside";

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

  return (
    <main>
      <div className="w-11/12 xl:w-10/12 m-auto flex flex-col xl:flex-row">
        <MainProducts mainProductData={mainProductData} />
        <Aside
          mainProductData={mainProductData}
          setSize39={setSize39}
          setSize40={setSize40}
          setSize405={setSize405}
          setSize41={setSize41}
          setSize42={setSize42}
          setSize425={setSize425}
          wished={wished}
          setWished={setWished}
          size39={size39}
          size40={size40}
          size405={size405}
          size41={size41}
          size42={size42}
          size425={size425}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
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
