import { FaShoppingCart } from "react-icons/fa";
const CartWidget = () => {
  return (
    <>
      <button type="button" className="btn btn-nav position-relative ">
        <FaShoppingCart className="text-naranja fs-3" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-naranja">
          99+
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
    </>
  );
};

export default CartWidget;
