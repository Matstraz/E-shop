import Accordions from "./Accordions";
import InteractiveButtons from "./InteractiveButtons";
import SizeSelector from "./SizeSelector";

export default function Aside({
  mainProductData,
  setSize39,
  setSize40,
  setSize405,
  setSize41,
  setSize42,
  setSize425,
  wished,
  setWished,
  size39,
  size40,
  size405,
  size41,
  size42,
  size425,
  shoppingCart,
  setShoppingCart,
}) {
  return (
    <aside className="xl:w-1/3 px-3 xl:px-14">
      <div className="font-bold hidden md:block">
        <p className="pt-1 text-xl">Title: {mainProductData.title}</p>
        <p className="text-xs pt-2">ID: {mainProductData.id}</p>
        <p className="pt-4">
          {mainProductData.price ? mainProductData.price : "624,99 €"}
        </p>
      </div>
      <SizeSelector
        setSize39={setSize39}
        setSize40={setSize40}
        setSize405={setSize405}
        setSize41={setSize41}
        setSize42={setSize42}
        setSize425={setSize425}
        setWished={setWished}
        size39={size39}
        size40={size40}
        size405={size405}
        size41={size41}
        size42={size42}
        size425={size425}
      />
      {/* INTERACTIVE BUTTONS */}
      <InteractiveButtons
        mainProductData={mainProductData}
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
      <div className="mt-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dolor sed asperiores nam, perferendis consequatur, aspernatur eum,
          neque hic ab dignissimos laboriosam corporis commodi iste nulla non
          deserunt ex alias cupiditate labore. Repellat, quos mollitia
          recusandae dolores illo, totam tempora natus doloribus voluptatibus
          expedita temporibus.
        </p>
        <ul className="mt-10 list-disc list-inside text-justify">
          <li>Color: Black</li>
          <li>Product ID: {mainProductData.id}</li>
        </ul>
      </div>
      <Accordions />
    </aside>
  );
}
