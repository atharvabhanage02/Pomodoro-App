import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import "./landingPage.css";
import "../TasksPage/home.css";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="landing-section-one">
          <div className="pomodoro-description">
            <h1>
              Achieve productivity with simple, charming, insightful time
              tracking
            </h1>
            <p>
              Life is crazy enough, simplify your productivity journey and start
              turning to-dos into have-dones in 25-minutes. The new focus
              booster is the tool you need to inspire success every day.
            </p>
            <div className="btns-align">
              <button
                className="pomodoro-btn"
                onClick={() => navigate("/tasks")}
              >
                Learn More
              </button>
              <button className="pomodoro-btn">Timer Page</button>
            </div>
          </div>
          <img src="/pomodoro-img-1.jpg" className="light-theme-img" alt="" />
        </div>
        <div className="landing-section-two">
          <img src="/pomodoro-img-2.png" className="light-theme-img" alt="" />

          <div className="pomodoro-description">
            <h1>Balance your goals</h1>
            <p>
              Spend time working toward all your goals; work, life, fitness and
              more. Focus booster makes you accountable and provides insight
              into how much time you actually dedicate to your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export { LandingPage };
