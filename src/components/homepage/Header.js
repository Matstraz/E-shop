import icons from "../util/Icons";

export default function Header({ shoppingCart }) {
  return (
    <header>
      <nav className="bg-slate-200">
        <ul className="flex items-center py-2 pl-10 gap-x-5 font-bold">
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-end gap-x-7 w-11/12 m-auto py-3">
        <div>{icons.header.heart}</div>
        <div className="relative">
          {icons.header.cart}
          <div className="absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full">
            {/* numero incremetale */}
            {shoppingCart}
          </div>
        </div>
      </div>
    </header>
  );
}
