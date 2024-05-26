import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/Sidebar";

function AppLayout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main style={{ display: 'flex', flexWrap: 'wrap' }}>
        <section style={{ flex: 15 }}>
          <SideBar />
        </section>
        <section style={{ flex: 85, padding: '1em' }}>
        {children}
        </section>
      </main>
    </>
  );
}

export default AppLayout;
