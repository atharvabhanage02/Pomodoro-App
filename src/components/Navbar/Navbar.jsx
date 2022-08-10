import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-wrapper">
        <div class="ecom-title">
          <div class="ecom-name">⏰ Be Focused</div>
        </div>
        <div class="user-activity-details">
          <BsFillMoonFill className="filter-icon" />
        </div>
      </div>
    </nav>
  );
};
export { Navbar };
