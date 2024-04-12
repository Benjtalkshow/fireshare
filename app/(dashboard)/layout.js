import Header from "../_components/dashboard/Header";
import Sidebar from "../_components/dashboard/Sidebar";

export default function layout({ children }) {
  return (
    <section className="w-full flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}
