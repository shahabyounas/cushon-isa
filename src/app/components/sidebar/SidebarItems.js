import { Link } from "react-router-dom";
import styles from "./sidebaritems.module.css";
function SidebarItems() {
  const menus = [
    {
      name: "Investment plans",
      path: "/independent-isa",
      isActive: true,
    },
    {
      name: "Funds offers",
      path: "/funds",
      isActive: false,
    },
    {
      name: "Investments",
      path: "/investments",
      isActive: false,
    },
    {
      name: "Settings",
      path: "/settings",
      isActive: false,
    },
    {
      name: "Upgrade plans",
      path: "/plans",
      isActive: false,
    },
    {
      name: "Summary",
      path: "/summary",
      isActive: false,
    },
  ];

  const itemStyle = () => ({
    width: "11em",
    padding: "1rem",
  });
  return (
    <nav className="nav">
      <ul className={styles.menus}>
        {menus.map((menu) => {
          return (
            <li style={itemStyle(menu.isActive)} key={menu.path}>
              <Link
                to={menu.path}
                style={{ textDecoration: "none" }}
                className="text fw-bold"
              >
                {menu.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SidebarItems;
