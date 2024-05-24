import styles from "./sidebaritems.module.css";
function SidebarItems() {
  const menus = [
    {
      name: "Investment plans",
      path: "/investment-plan",
      isActive: true,
    },
    {
      name: "Funds offers",
      path: "/funds-offers",
      isActive: false,
    },
    {
      name: "Track investment",
      path: "/track-investment",
      isActive: false,
    },
    {
      name: "Settings",
      path: "/settings",
      isActive: false,
    },
    {
      name: "Upgrade plans",
      path: "/upgrade-plans",
      isActive: false,
    },
    {
      name: "Summary",
      path: "/summary",
      isActive: false,
    },
  ];

  const itemStyle = (status) => ({
    backgroundColor: status ? "var(--primary-100)" : "",
    color: status ? "var(--bg-color-100)" : "",
    width: "11em",
    padding: "1rem",
    borderRadius: "var(--border-radius-sm)",
    textAlign: "start",
    fontWeight: "600",
  });
  return (
    <nav className="nav">
      <ul className={styles.menus}>
        {menus.map((menu) => {
          return (
            <li style={itemStyle(menu.isActive)} key={menu.path}>
              <span>{menu.name}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SidebarItems;
