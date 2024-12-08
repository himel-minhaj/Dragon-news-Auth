import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LetestNews from "../Components/LetestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../LayoutComponents/LeftNavbar";
import RightNav from "../LayoutComponents/RightNav";

const HomeLayout = () => {
  return (
    <div className="font-Poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LetestNews></LetestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto my-4">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto my-4 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className=" col-span-6">
         
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
