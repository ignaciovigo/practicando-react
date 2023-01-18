import React from "react";
import { FaShoppingCart, FaShopify, FaHome } from "react-icons/fa";
import {IoIosArrowBack} from "react-icons/io"

const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <FaHome></FaHome>,
  },
  {
    title: "Products",
    path: null,
    icon: <FaShopify></FaShopify>,
    subIcon: <></>,
    subNav: [
      {
        title: "All",
        path: "/products",
      },
      {
        title: "electronics",
        path: "/category/1",
      },
      {
        title: "jewelery",
        path: "/category/2",
      },
      {
        title: "men's clothing",
        path: "/category/3",
      },
      {
        title: "women's clothing",
        path: "/category/4",
      },
    ],
  },
  {
    title: "Carrito",
    path: "./carrito",
    icon: <FaShoppingCart></FaShoppingCart>,
  } /* ,
  {
    title: "Usuario",
    path: "./usuario",
    icon: <FaUserAlt ></FaUserAlt>,
    subnavs: [
      {
        title: "login",
        icon: <BiLogOut ></BiLogOut>,
      },
    ],
  }, */,
];

export default SidebarData;
