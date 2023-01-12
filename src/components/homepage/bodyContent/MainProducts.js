import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MainProducts({ mainProductData }) {
  //-- REQUIRED CAROUSEL VARIABLE
  const responsive2 = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="xl:w-2/3">
      <article className="hidden md:grid xl:grid-cols-2 grid-cols-3 h-fit gap-2">
        <img src={mainProductData.url} alt="photo1"></img>
        <img src={mainProductData.url} alt="photo2"></img>
        <img src={mainProductData.url} alt="photo3"></img>
        <img src={mainProductData.url} alt="photo4"></img>
        <img src={mainProductData.url} alt="photo5"></img>
        <img src={mainProductData.url} alt="photo6"></img>
      </article>
      <article className="md:hidden">
        <div className="font-bold md:hidden">
          <p className="pt-1 text-xl">Title: {mainProductData.title}</p>
          <p className="text-xs pt-2">ID: {mainProductData.id}</p>
          <p className="pt-4">
            {mainProductData.price ? mainProductData.price : "624,99 €"}
          </p>
        </div>
        <div className="mt-2">
          <Carousel responsive={responsive2}>
            <img src={mainProductData.url} alt="photo1"></img>
            <img src={mainProductData.url} alt="photo2"></img>
            <img src={mainProductData.url} alt="photo3"></img>
            <img src={mainProductData.url} alt="photo4"></img>
            <img src={mainProductData.url} alt="photo5"></img>
            <img src={mainProductData.url} alt="photo6"></img>
          </Carousel>
        </div>
      </article>
    </div>
  );
}
