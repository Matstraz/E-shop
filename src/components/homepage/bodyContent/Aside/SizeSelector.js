export default function SizeSelector({
  size39,
  size40,
  size405,
  size41,
  size42,
  size425,
  setSize39,
  setSize40,
  setSize405,
  setSize41,
  setSize42,
  setSize425,
  setWished,
}) {
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
  return (
    /* SIZE SELECTORS */
    <div className="grid grid-cols-3 gap-1 mt-12 md:mt-24 ">
      <p className="col-span-3 font-bold pb-1">Seleziona la taglia/misura</p>
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
  );
}
