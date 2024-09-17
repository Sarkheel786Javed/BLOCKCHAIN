import styles from './Layout.module.css'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import { useSelector } from 'react-redux'

const Layout = ({ children }) => {
    const auth = {
        name: "sarkheel",
        Emal: "sarkheelh@gmail.com",
        location: "Pakistan",
    }
    const SidebarOpen = useSelector((state) => state.Sidebar.value)
    return (
        <div className={`${styles.layout_main} w-100 text-light`}>
            <div className={`w-100`}>
                <Navbar />
                <div className={`d-flex justify-content-start align-items-start`}>
                    <div className={` ${auth.name && SidebarOpen === true ? styles.sidebar_show : styles.sidebar_hide}`}>
                        <Sidebar />
                    </div>
                    <div className={` ${auth.name && SidebarOpen === true ? styles.content_show : styles.content_Hide} `}>{children}</div>
                </div>
                <footer className="bg-dark">footer</footer>
            </div>
        </div>
    )
}

export default Layout