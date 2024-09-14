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
        <div className="">
          <img
            src="data:image/png;base64,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"
            alt="logo"
            height="40px" />
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
              <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                  <h5 id="offcanvasRightLabel">
                    <div className="">
                      <img
                        src="data:image/png;base64,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"
                        alt="logo"
                        height="40px" />
                    </div>
                  </h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                  <nav className={`w-100 ${styles.nav_small}`}>
                    {Tabs.map((tab, index) => (
                      <div key={index} className="text-center my-3">
                        <NavLink  to={tab.path} className={styles.nav_link_small}>
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