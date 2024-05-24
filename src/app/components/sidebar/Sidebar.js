import Menus from "./SidebarItems"
import styles from './sidebar.module.css'
function Sidebar(){
    return <aside className={styles.sidebar}>
        <Menus />
    </aside>
}

export default Sidebar