import { NavLink, Link } from "react-router-dom";
import { Wrapper } from "./sidebar-styled.ts";

import Logo from "../../assets/reco_logo.png";

export default function Sidebar() {
  return (
    <Wrapper>
      <nav>
        <Link to="\">
          <img src={Logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "non-active")}
            >
              Apps Discovery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="inventory"
              className={({ isActive }) => (isActive ? "active" : "non-active")}
            >
              Apps Inventory
            </NavLink>
          </li>
          <li>
            <NavLink
              to="settings"
              className={({ isActive }) => (isActive ? "active" : "non-active")}
            >
              settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
}
