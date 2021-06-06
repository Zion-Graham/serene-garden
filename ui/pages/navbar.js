import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-row text-lg py-3">
      <p className="flex-1 text-2xl font-bold">Serene Garden</p>
      <div className="flex flex-1 justify-center space-x-5">
        {navButton("Home")}
        {navButton("Products")}
        {navButton("About")}
      </div>
      <div className="flex flex-1 justify-end space-x-5">
        {iconButton({
          src: "/search_black_24dp.svg",
          alt: "Search",
          onClick: () => console.log("Clicked Search Icon!"),
        })}
        {iconButton({
          src: "/shopping_cart_black_24dp.svg",
          alt: "Shopping Cart",
          onClick: () => console.log("Clicked Shopping Icon!"),
        })}
        {iconButton({
          src: "/account_circle_black_24dp.svg",
          alt: "Account",
          onClick: () => console.log("Clicked Account Icon!"),
        })}
      </div>
    </div>
  );
}

/**
 * Button with bold and uppercase text
 *
 * @param {String} text
 *
 */
const navButton = (text) => (
  <button className="font-semibold uppercase">{text}</button>
);

/**
 *
 * @param {Object} attrs used to modify the image's src and alt, and give the button an onClick action
 * @param {String} attrs.src
 * @param {String} attrs.alt
 * @param {Function} attrs.onClick
 */
const iconButton = ({ src, alt, onClick }) => (
  <button>
    <Image src={src} alt={alt} width="36" height="36" onClick={onClick} />
  </button>
);
