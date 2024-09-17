import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { NavLink, useLocation } from 'react-router-dom'
function Navbar() {
  const location = useLocation()
  const Tabs = [
    {
      name: "Home",
      path: "/",
      icon: ""
    },
    {
      name: "About",
      path: "/about",
      icon: ""
    },
    {
      name: "Token",
      path: "/token",
      icon: ""
    },
    {
      name: "Activity",
      path: "/activity",
      icon: ""
    },
    {
      name: "Roadmap",
      path: "/roadmap",
      icon: ""
    },
    {
      name: "Team",
      path: "/team",
      icon: ""
    },
    {
      name: "Contact",
      path: "/contact",
      icon: ""
    },
  ]
  // /////////////////////////////////for small and large screen ////////////////////////////////////////
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 767 ? true : false); // Explicit boolean type
  useEffect(() => {
    debugger
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleResize = () => setIsSmallScreen(mediaQuery.matches); // mediaQuery.matches is always a boolean

    // Attach listener for screen resize
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);
  return (
    <div className={`w-100 ${styles.main}`}>
      <div className={`${styles.main_inner}`}>
        <div className="d-flex justify-content-start align-items-center">
          <img
            src="images/ether.png"
            alt="logo"
            height="60px" />
          <label className="ms-1">Ethereum</label>
        </div>
        <div className={`${styles.tabs_Cover}`}>
          <nav className={styles.nav}>
            {Tabs.map((tab, index) => (
              <NavLink key={index} to={tab.path} className={location.pathname === `${tab.path}` ? styles.nav_link_active : styles.nav_link}>
                {tab.icon} {tab.name}
              </NavLink>
            ))}

          </nav>
          <div className={`${isSmallScreen === true ? "d-block" : "d-none"}`}>
            <div>
              <div className="bi bi-list fs-1 mx-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
              <div className={`offcanvas offcanvas-end ${styles.offcanvas}`} tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                  <label id="offcanvasRightLabel">
                    <div className="d-flex justify-content-start align-items-center">
                      <img
                        src="images/ether.png"
                        alt="logo"
                        height="60px" />
                      <label className="ms-1">Ethereum</label>
                    </div>
                  </label>
                  <button type="button" className="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                  <nav className={`w-100 ${styles.nav_small}`}>
                    {Tabs.map((tab, index) => (
                      <div key={index} className="text-center my-3">
                        <NavLink key={index} to={tab.path} className={location.pathname === `${tab.path}` ? styles.nav_link_active_small : styles.nav_link_small}>
                          {tab.icon} {tab.name}
                        </NavLink>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar