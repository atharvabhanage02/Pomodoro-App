import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav class="navbar">
      <div class="navbar-wrapper">
        <div class="ecom-title cursor-pointer">
          <div class="ecom-name" onClick={() => navigate("/")}>
            ⏰ Be Focused
          </div>
        </div>
        <div class="user-activity-details">
          <BsFillMoonFill className="filter-icon" />
        </div>
      </div>
    </nav>
  );
};
export { Navbar };
