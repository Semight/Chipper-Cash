import React from "react";
import { Ul } from "./NavBar.styled";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="">Product</a>
      </li>
      <li>
        <a href="">Company</a>
      </li>
      <li>
        <a href="">Support</a>
      </li>
      <li>
        <a className="btn-menu" href="">Download</a>
      </li>
    </Ul>
  );
};

export default RightNav;