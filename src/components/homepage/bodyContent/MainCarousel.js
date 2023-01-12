import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MainCarousel({
  carouselProductsData,
  setMainProductData,
  setSize39,
  setSize40,
  setSize405,
  setSize41,
  setSize42,
  setSize425,
  setWished,
}) {
  //-- REQUIRED CAROUSEL VARIABLE
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
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  //-- CHANGE MAIN PRODUCT IMAGE/DATA THROUGH 'carouselProductsData' USING EVENT TARGET INSTEAD OF MAPPING 'carouselProductsData' ITSELF
  function handleMainProductData(e) {
    setMainProductData({
      url: e.target.src,
      id: Number(e.target.alt),
      title: e.target.title,
      price: "109,99 €",
    });
    setSize39(false);
    setSize40(false);
    setSize405(false);
    setSize41(false);
    setSize42(false);
    setSize425(false);
    setWished(false);
  }
  return (
    <div className="p-10 w-11/12 m-auto">
      <p className="font-bold">Related Procducts</p>
      <Carousel responsive={responsive} centerMode={true} className="mt-4">
        {carouselProductsData.map((el, index) => (
          <div key={el.id + index}>
            <img
              src={el.url}
              alt={el.id}
              title={el.title}
              className="pr-5 cursor-pointer"
              onClick={handleMainProductData}
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
  );
}
