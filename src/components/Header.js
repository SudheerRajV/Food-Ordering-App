import logo from "../../asset/burger-icon.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// Header
//     Logo
//     Nav items

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useInternetStatus();
  const { userName } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between p-8 bg-slate-50">
      <div className="logo-container">
        <img className="w-16" src={logo}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex m-4">
          <li className="px-4 py-2">
            {" "}
            Online status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 py-2 flex">
            <Link to="/cart">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>{" "}
              ({cartItems.length})
              </div>
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="bg-orange-400 px-4 rounded-md"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 py-2">{userName}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
