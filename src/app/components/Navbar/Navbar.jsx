import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isSidebarOpen, isSidebarClose } from "../Sidebar/Slice/SidebarSlice";

const Tabs = [
  {
    name: "Home",
    path: "home",
    icon: "",
  },
  {
    name: "About",
    path: "about",
    icon: "",
  },
  {
    name: "Token",
    path: "token",
    icon: "",
  },
  {
    name: "Activity",
    path: "activity",
    icon: "",
  },
  {
    name: "Roadmap",
    path: "roadmap",
    icon: "",
  },
  {
    name: "Team",
    path: "team",
    icon: "",
  },
  {
    name: "Contact",
    path: "contact",
    icon: "",
  },
];

function Navbar() {
  ////////// redux /////////////////
  const dispatch = useDispatch();
  const SidebarOpen = useSelector((state) => state.Sidebar.value);
  const handleSidebar = () => {
    if (SidebarOpen === false) {
      dispatch(isSidebarOpen());
    } else {
      dispatch(isSidebarClose());
    }
  };

  const location = useLocation();

  // Check for the current active path in the URL
  const getActiveTab = () => {
    const hash = location.hash ? location.hash.substring(1) : "home";
    return hash; // Default to "home" if no hash is present
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  useEffect(() => {
    setActiveTab(getActiveTab()); // Update active tab on URL change
  }, [location]);

  // /////////////////////////////////for small and large screen ////////////////////////////////////////
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= 767 ? true : false
  );

  useEffect(() => {
    // setIsSmallScreen(true);
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = () => setIsSmallScreen(mediaQuery.matches);

    // Attach listener for screen resize
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  //////////////////// Add an event listener for scrolling ///////////////////////
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /////////////////////////////// for link to section/////////////////
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Update the URL with hash (e.g., #about)
    window.location.hash = `#${sectionId}`;
  };
  const auth = {
    name: "sarkheel",
    Emal: "sarkheelh@gmail.com",
    location: "Pakistan",
  };
  return (
    <div
      className={`w-100 ${
        navBackground === true ? styles.main_SCROLL : styles.main
      }`}
    >
      <div className={`${styles.main_inner}`}>
        <div className="d-flex justify-content-start align-items-center">
          <div
            className={`bi bi-list fs-1 mx-2 ${
              isSmallScreen === true && auth.name ? "d-block" : "d-none"
            }`}
            onClick={handleSidebar}
          />
          <img src="images/ether.png" alt="logo" height="60px" />
          <label className="ms-1">Ethereum</label>
        </div>
        <div className={`${styles.tabs_Cover}`}>
          <nav className={styles.nav}>
            {Tabs.map((tab, index) => (
              <div
                onClick={() => handleScroll(tab.path)}
                key={index}
                className={
                  activeTab === tab.path
                    ? styles.nav_link_active
                    : styles.nav_link
                }
              >
                {tab.icon} {tab.name}
              </div>
            ))}
          </nav>
          {isSmallScreen === true ? (
            <>
              <div>
                <div
                  className="bi bi-list fs-1 mx-2"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                />

                <div
                  className="offcanvas offcanvas-end bg-dark"
                  // style={{ marginTop: "70px" }}
                  tabIndex={-1}
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body ">
                    <div className="">
                      <nav className={`w-100 ${styles.nav_small}`}>
                        {Tabs.map((tab, index) => (
                          <div
                            onClick={() => handleScroll(tab.path)}
                            key={index}
                            className={
                              activeTab === tab.path
                                ? styles.nav_link_active
                                : styles.nav_link
                            }
                          >
                            {tab.icon} {tab.name}
                          </div>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
