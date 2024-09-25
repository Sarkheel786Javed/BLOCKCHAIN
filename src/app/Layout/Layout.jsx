import styles from "./Layout.module.css";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const auth = {
    name: "sarkheel",
    Emal: "sarkheelh@gmail.com",
    location: "Pakistan",
  };
  const SidebarOpen = useSelector((state) => state.Sidebar.value);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`${styles.layout_main} w-100 text-light`}>
      <div className={`w-100`}>
        <Navbar />
        <div className={`d-flex justify-content-start align-items-start`}>
          <div
            className={` ${
              auth.name && SidebarOpen === true
                ? styles.sidebar_show
                : styles.sidebar_hide
            }`}
          >
            <Sidebar />
          </div>
          <div
            className={` ${
              auth.name && SidebarOpen === true
                ? styles.content_show
                : styles.content_Hide
            } `}
          >
            {children}
          </div>
        </div>
        {isVisible && (
          <div className={styles.scrollToTopButton} onClick={scrollToTop}>
            <div className={`bi bi-caret-up fs-3 ${styles.Scrol_Button}`} />
          </div>
        )}
        <footer className="bg-dark">footer</footer>
      </div>
    </div>
  );
};

export default Layout;
