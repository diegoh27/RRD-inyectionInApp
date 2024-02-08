import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex justify-between  bg-fixed">
      <ul className="flex flex-row">
        <li>
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/">Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/furnitures">Furnitures</NavLink>
        </li>
        <li>
          <NavLink to="/toys">Toys</NavLink>
        </li>
        <li>
          <NavLink to="/others">Others</NavLink>
        </li>
      </ul>

      <ul className="flex flex-row">
        <li>diegolancer27@gmail.com</li>
        <li>
          <NavLink to="/myOrders">My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/account">My account</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Sing In</NavLink>
        </li>
        <li>🛒0</li>
      </ul>
    </nav>
  );
};

export default NavBar;
