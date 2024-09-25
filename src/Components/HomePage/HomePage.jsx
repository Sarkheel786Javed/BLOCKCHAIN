import { useEffect, useState } from "react";
import Particles from "./particles/Particles";
import About from "../AboutPage/About";

function HomePage() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= 767 ? true : false
  );
  useEffect(() => {
    debugger;
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = () => setIsSmallScreen(mediaQuery.matches); // mediaQuery.matches is always a boolean

    // Attach listener for screen resize
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  return (
    <div className="w-100">
      <div id="home" className="position-relative" style={{ height: "120vh" }}>
        <Particles />
      </div>
      <div
        id="about"
        className={`mt-5 pt-5 ${
          isSmallScreen === true ? "container-fluid" : "container"
        }`}
      >
       <About/>
      </div>
      {/* <div
        id="token"
        className={`mt-5 pt-5 ${
          isSmallScreen === true ? "container-fluid" : "container"
        }`}
        style={{ height: "50vh" }}
      >
      
      </div> */}
      {/* <div
        id="activity"
        className={`mt-5 pt-5 ${
          isSmallScreen === true ? "container-fluid" : "container"
        }`}
      ></div>
      <div
        id="roadmap"
        className={`mt-5 pt-5 ${
          isSmallScreen === true ? "container-fluid" : "container"
        }`}
        style={{ height: "50vh" }}
      ></div>
      <div
        id="team"
        className={`mt-5 pt-5 ${
          isSmallScreen === true ? "container-fluid" : "container"
        }`}
        style={{ height: "50vh" }}
      ></div>
      <div
        id="contact"
        className={`mt-5 pt-5 ${
          isSmallScreen === true ? "container-fluid" : "container"
        }`}
        style={{ height: "50vh" }}
      ></div> */}
    </div>
  );
}

export default HomePage;
