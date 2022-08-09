import { Navbar } from "../../components/Navbar/Navbar";
import { AiOutlinePlus } from "../../Utils/icons";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-main-container">
        <div>
          <div>
            <h1>Welcome User !</h1>
            <h3>Add task one by one</h3>
          </div>
          <button className="floating-btn add-task-btn">
            <AiOutlinePlus />
          </button>
          <div className="all-tasks-container">
            <h2>Tasks</h2>
            <div className="all-single-tasks"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Home };
